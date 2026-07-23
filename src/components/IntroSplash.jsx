import React, { useEffect, useRef, useState } from 'react';
import introVideo from './intro/intro.mov';
import './IntroSplash.css';

const EXIT_MS = 700;
const PLAY_COUNT = 2;
const FALLBACK_MS = 20000;

const IntroSplash = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [totalMs, setTotalMs] = useState(6000);
  const videoRef = useRef(null);
  const timersRef = useRef([]);
  const finishedRef = useRef(false);
  const playsDoneRef = useRef(0);
  const loopingRef = useRef(false);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    clearTimers();
    const video = videoRef.current;
    if (video) video.pause();
    setLeaving(true);
    const t = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, EXIT_MS);
    timersRef.current.push(t);
  };

  const replaySeamless = (video) => {
    if (loopingRef.current || finishedRef.current) return;
    loopingRef.current = true;

    // Jump back before the last frame so the restart feels continuous
    const restart = () => {
      try {
        video.currentTime = 0.001;
      } catch {
        video.currentTime = 0;
      }
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => finish());
      }
      // Tiny delay before allowing another loop edge
      requestAnimationFrame(() => {
        loopingRef.current = false;
      });
    };

    // Keep last frame painted while seeking (avoids a black flash)
    if (video.readyState >= 2) {
      restart();
    } else {
      video.addEventListener('loadeddata', restart, { once: true });
      restart();
    }
  };

  const handleEnded = () => {
    if (finishedRef.current) return;
    playsDoneRef.current += 1;
    if (playsDoneRef.current >= PLAY_COUNT) {
      finish();
      return;
    }
    const video = videoRef.current;
    if (video) replaySeamless(video);
  };

  useEffect(() => {
    if (!visible) {
      onFinish?.();
      return undefined;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  useEffect(() => {
    if (!visible || leaving) return undefined;

    clearTimers();
    playsDoneRef.current = 0;
    loopingRef.current = false;

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {
          const t = setTimeout(finish, 1500);
          timersRef.current.push(t);
        });
      }
    }

    const fallback = setTimeout(finish, FALLBACK_MS);
    timersRef.current.push(fallback);

    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, leaving]);

  useEffect(() => () => clearTimers(), []);

  if (!visible) return null;

  return (
    <div
      className={`intro-splash ${leaving ? 'is-leaving' : ''}`}
      role="dialog"
      aria-label="Portfolio intro"
      aria-modal="true"
    >
      <div className="intro-stage">
        <div className="intro-scene intro-scene--video is-active">
          <div className="intro-frame">
            <video
              ref={videoRef}
              className="intro-media intro-media--drift"
              src={introVideo}
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={(e) => {
                const sec = e.currentTarget.duration;
                if (Number.isFinite(sec) && sec > 0) {
                  setTotalMs(Math.max(2400, sec * 1000 * PLAY_COUNT));
                }
              }}
              onEnded={handleEnded}
              onError={finish}
            />
          </div>
        </div>

        <div className="intro-grain" aria-hidden="true" />
        <div className="intro-scan" aria-hidden="true" />
        <div className="intro-vignette" aria-hidden="true" />
      </div>

      <button type="button" className="intro-skip" onClick={finish}>
        Skip
      </button>

      <div className="intro-progress" aria-hidden="true">
        <span className="is-active" style={{ '--fill-ms': `${totalMs}ms` }}>
          <i />
        </span>
      </div>
    </div>
  );
};

export default IntroSplash;

import React, { useEffect, useRef, useState } from 'react';
import scene1Video from './intro/scene-1.mp4';
import scene2Img from './intro/scene-2.png';
import scene3Img from './intro/scene-3.png';
import './IntroSplash.css';

const STILL_DURATION_MS = 4200;
const EXIT_MS = 700;

const IntroSplash = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [scene, setScene] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [videoDurationMs, setVideoDurationMs] = useState(4500);
  const videoRef = useRef(null);
  const timersRef = useRef([]);
  const finishedRef = useRef(false);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    clearTimers();
    setLeaving(true);
    const t = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, EXIT_MS);
    timersRef.current.push(t);
  };

  const goToScene = (next) => {
    if (finishedRef.current) return;
    if (next > 2) {
      finish();
      return;
    }
    setScene(next);
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

    if (scene === 0) {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise?.catch) {
          playPromise.catch(() => {
            const t = setTimeout(() => goToScene(1), 1200);
            timersRef.current.push(t);
          });
        }
      }
      return clearTimers;
    }

    const t = setTimeout(() => goToScene(scene + 1), STILL_DURATION_MS);
    timersRef.current.push(t);
    return clearTimers;
  }, [scene, visible, leaving]);

  useEffect(() => () => clearTimers(), []);

  if (!visible) return null;

  const progressMs = scene === 0 ? videoDurationMs : STILL_DURATION_MS;

  return (
    <div
      className={`intro-splash ${leaving ? 'is-leaving' : ''}`}
      role="dialog"
      aria-label="Portfolio intro"
      aria-modal="true"
    >
      <div className="intro-stage">
        <div className={`intro-scene intro-scene--video ${scene === 0 ? 'is-active' : ''}`}>
          <div className="intro-frame">
            <video
              ref={videoRef}
              className="intro-media"
              src={scene1Video}
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={(e) => {
                const sec = e.currentTarget.duration;
                if (Number.isFinite(sec) && sec > 0) {
                  setVideoDurationMs(Math.max(1200, sec * 1000));
                }
              }}
              onEnded={() => goToScene(1)}
            />
          </div>
        </div>

        <div className={`intro-scene intro-scene--still intro-scene--2 ${scene === 1 ? 'is-active' : ''}`}>
          <div className="intro-frame">
            <img
              className="intro-media-bg"
              src={scene2Img}
              alt=""
              aria-hidden="true"
              draggable={false}
            />
            <img
              className="intro-media ken-burns-in"
              src={scene2Img}
              alt="Blueprint of Utsav — scene 2"
              draggable={false}
            />
          </div>
        </div>

        <div className={`intro-scene intro-scene--still intro-scene--3 ${scene === 2 ? 'is-active' : ''}`}>
          <div className="intro-frame">
            <img
              className="intro-media-bg"
              src={scene3Img}
              alt=""
              aria-hidden="true"
              draggable={false}
            />
            <img
              className="intro-media ken-burns-out"
              src={scene3Img}
              alt="Blueprint of Utsav — scene 3"
              draggable={false}
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
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={
              i < scene ? 'is-done' : i === scene ? 'is-active' : ''
            }
            style={i === scene ? { '--fill-ms': `${progressMs}ms` } : undefined}
          >
            <i />
          </span>
        ))}
      </div>
    </div>
  );
};

export default IntroSplash;

import { useState, useRef, useEffect } from 'react';
import { FaReact, FaDocker, FaGitAlt, FaLinux, FaPython } from 'react-icons/fa';
import {
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiJenkins,
  SiExpo,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiNestjs,
} from 'react-icons/si';

const icons = [
  { Icon: FaReact, name: 'React' },
  { Icon: FaDocker, name: 'Docker' },
  { Icon: FaGitAlt, name: 'Git' },
  { Icon: FaLinux, name: 'Linux' },
  { Icon: FaPython, name: 'Python' },
  { Icon: SiDotnet, name: '.NET' },
  { Icon: SiNestjs, name: 'NestJS' },
  { Icon: SiExpo, name: 'Expo' },
  { Icon: SiMongodb, name: 'MongoDB' },
  { Icon: SiPostgresql, name: 'PostgreSQL' },
  { Icon: SiJenkins, name: 'Jenkins' },
  { Icon: SiTypescript, name: 'TypeScript' },
  { Icon: SiNextdotjs, name: 'Next.js' },
  { Icon: SiTailwindcss, name: 'Tailwind' },
  { Icon: SiDjango, name: 'Django' },
];

const Label = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const pauseTimeoutRef = useRef(null);
  const animationRef = useRef(null);
  const containerRef = useRef(null);
  const repeated = [...icons, ...icons, ...icons, ...icons];

  useEffect(() => {
    if (!isPlaying || isDragging) return undefined;
    const animate = () => {
      setCurrentPosition((prev) => {
        const next = prev - 0.45;
        const width = containerRef.current?.scrollWidth / 4 || 0;
        return next <= -width ? 0 : next;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, isDragging]);

  const handleStart = (x) => {
    setIsDragging(true);
    setStartX(x);
    setStartPosition(currentPosition);
    setIsPlaying(false);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleMove = (x) => {
    if (!isDragging) return;
    setCurrentPosition(startPosition + (x - startX));
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const width = containerRef.current?.scrollWidth / 4 || 0;
    setCurrentPosition((prev) => (prev > 0 ? (prev % width) - width : prev % width));
    pauseTimeoutRef.current = setTimeout(() => setIsPlaying(true), 600);
  };

  useEffect(() => {
    if (!isDragging) return undefined;
    const onMove = (e) => handleMove(e.clientX);
    const onUp = () => handleEnd();
    const onTouchMove = (e) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onUp);
    };
  });

  useEffect(
    () => () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    },
    []
  );

  return (
    <div className="w-full overflow-hidden py-8 border-y border-night-line bg-night relative">
      <div
        className="select-none"
        onMouseDown={(e) => {
          e.preventDefault();
          handleStart(e.clientX);
        }}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        style={{ touchAction: 'none' }}
      >
        <div
          ref={containerRef}
          className="flex"
          style={{
            transform: `translateX(${currentPosition}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out',
          }}
        >
          {repeated.map(({ Icon, name }, index) => (
            <div key={`${name}-${index}`} className="flex-shrink-0 px-5">
              <div className="flex items-center gap-2.5 pointer-events-none whitespace-nowrap text-cream-mute">
                <Icon className="text-xl" />
                <span className="text-sm tracking-wide">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Label;

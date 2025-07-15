import { useState, useRef, useEffect } from 'react';
import { FaReact, FaDocker, FaAws, FaGitAlt, FaLinux, FaPython } from 'react-icons/fa';
import { SiDotnet, SiMongodb, SiPostgresql, SiJenkins, SiTypescript, SiNextdotjs, SiTailwindcss, SiDjango, SiRabbitmq, SiTrivy, SiSonarqube } from 'react-icons/si';

const Label = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const [pauseTimeout, setPauseTimeout] = useState(null);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  const icons = [
    { Icon: FaReact, name: 'React' },
    { Icon: FaDocker, name: 'Docker' },
    { Icon: FaGitAlt, name: 'Git' },
    { Icon: FaLinux, name: 'Linux' },
    { Icon: FaPython, name: 'Python' },
    { Icon: SiDotnet, name: '.NET' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: SiJenkins, name: 'Jenkins' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: SiDjango, name: 'Django' },
    { Icon: SiRabbitmq, name: 'RabbitMQ' },
  ];

  // Create multiple copies for seamless scrolling
  const repeatedIcons = [...icons, ...icons, ...icons, ...icons];

  // Animation loop
  useEffect(() => {
    if (isPlaying && !isDragging) {
      const animate = () => {
        setCurrentPosition(prev => {
          const newPos = prev - 1; // Move left by 1px per frame
          // Reset position when one full cycle is complete
          const containerWidth = containerRef.current?.scrollWidth / 4 || 0;
          return newPos <= -containerWidth ? 0 : newPos;
        });
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, isDragging]);

  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setStartPosition(currentPosition);
    setIsPlaying(false);
    
    // Clear any existing timeout
    if (pauseTimeout) {
      clearTimeout(pauseTimeout);
      setPauseTimeout(null);
    }
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    
    const deltaX = clientX - startX;
    const newPosition = startPosition + deltaX;
    
    // Allow dragging in both directions
    setCurrentPosition(newPosition);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Normalize position to prevent getting stuck
    const containerWidth = containerRef.current?.scrollWidth / 4 || 0;
    setCurrentPosition(prev => {
      if (prev > 0) return prev % containerWidth - containerWidth;
      return prev % containerWidth;
    });
    
    // Resume playing after a short delay
    const timeout = setTimeout(() => {
      setIsPlaying(true);
    }, 500);
    
    setPauseTimeout(timeout);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e) => {
    e.preventDefault();
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Add global event listeners for mouse move and up
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, startX, startPosition]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeout) {
        clearTimeout(pauseTimeout);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [pauseTimeout]);

  return (
    <div className="w-full overflow-hidden py-6 bg-[#171717] relative">
      <div 
        className="relative h-full cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ touchAction: 'none' }}
      >
        <div 
          ref={containerRef}
          className="flex will-change-transform"
          style={{
            transform: `translateX(${currentPosition}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          {repeatedIcons.map(({ Icon, name }, index) => (
            <div className="p-1 bg-[#171717] flex-shrink-0" key={`${name}-${index}`}>
              <div className="flex items-center mx-4 p-5 px-10 rounded-lg bg-[#232323] border-4 border-white hover:shadow-white hover:shadow-xl transition-all duration-300 pointer-events-none whitespace-nowrap">
                <Icon className="text-5xl text-white mr-2" />
                <span className="text-white font-semibold text-lg">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute right-2 text-white text-sm opacity-70">
        {isDragging ? 'Dragging...' : isPlaying ? 'Showing Skills(can be dragged)' : 'Paused'}
      </div>
    </div>
  );
};

export default Label;
import React, { useState, useEffect } from 'react';

const ClickRipple = () => {
  const [ripples, setRipples] = useState([]);

  // Function to detect background color at click position
  const getBackgroundColor = (x, y) => {
    const element = document.elementFromPoint(x, y);
    if (!element) return '#171717'; // Default dark
    
    // Get computed style
    const style = window.getComputedStyle(element);
    let bgColor = style.backgroundColor;
    
    // If background is transparent, check parent
    if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
      let parent = element.parentElement;
      while (parent && parent !== document.body) {
        const parentStyle = window.getComputedStyle(parent);
        const parentBg = parentStyle.backgroundColor;
        if (parentBg !== 'rgba(0, 0, 0, 0)' && parentBg !== 'transparent') {
          bgColor = parentBg;
          break;
        }
        parent = parent.parentElement;
      }
    }
    
    // Convert rgb/rgba to hex or check brightness
    const rgbMatch = bgColor.match(/\d+/g);
    if (rgbMatch && rgbMatch.length >= 3) {
      const r = parseInt(rgbMatch[0]);
      const g = parseInt(rgbMatch[1]);
      const b = parseInt(rgbMatch[2]);
      // Calculate brightness
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      // Return white for dark backgrounds, cyan for light backgrounds
      return brightness > 128 ? '#06b6d4' : '#ffffff'; // cyan-500 for light, white for dark
    }
    
    // Default: check if it's a known light background
    const lightBackgrounds = ['#D7D7D7', '#ffffff', '#fff', 'white'];
    const elementBg = style.backgroundColor.toLowerCase();
    if (lightBackgrounds.some(bg => elementBg.includes(bg))) {
      return '#06b6d4'; // cyan-500
    }
    
    return '#ffffff'; // Default white for dark backgrounds
  };

  useEffect(() => {
    const handleClick = (e) => {
      // Detect background color at click position
      const rippleColor = getBackgroundColor(e.clientX, e.clientY);
      
      // Create ripple at click position
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        color: rippleColor,
      };
      
      setRipples((prev) => [...prev, newRipple]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, 800);
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Multiple expanding circles for wave effect (like ))) */}
          <div className="absolute inset-0">
            {/* First wave */}
            <div
              className="absolute rounded-full border-2"
              style={{
                width: '20px',
                height: '20px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderColor: ripple.color,
                boxShadow: `0 0 8px ${ripple.color}40`,
                animation: 'ripple-wave 0.8s ease-out',
              }}
            />
            {/* Second wave */}
            <div
              className="absolute rounded-full border-2"
              style={{
                width: '20px',
                height: '20px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderColor: ripple.color,
                boxShadow: `0 0 8px ${ripple.color}40`,
                animation: 'ripple-wave 0.8s ease-out 0.15s',
              }}
            />
            {/* Third wave */}
            <div
              className="absolute rounded-full border-2"
              style={{
                width: '20px',
                height: '20px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderColor: ripple.color,
                boxShadow: `0 0 8px ${ripple.color}40`,
                animation: 'ripple-wave 0.8s ease-out 0.3s',
              }}
            />
          </div>
        </div>
      ))}
      <style>{`
        @keyframes ripple-wave {
          0% {
            width: 20px;
            height: 20px;
            opacity: 1;
            border-width: 3px;
          }
          100% {
            width: 150px;
            height: 150px;
            opacity: 0;
            border-width: 1px;
          }
        }
      `}</style>
    </>
  );
};

export default ClickRipple;

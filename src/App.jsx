import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About/About';


const App = () => {
  useEffect(() => {
    // Debug: Check if images are accessible
    console.log('Testing cursor images...');
    
    const testDefault = new Image();
    testDefault.onload = () => {
      console.log('✓ Default cursor image loaded:', testDefault.width + 'x' + testDefault.height);
      if (testDefault.width > 128 || testDefault.height > 128) {
        console.warn('⚠ Cursor image is larger than 128x128px. Browsers may reject it.');
      }
    };
    testDefault.onerror = () => {
      console.error('✗ Failed to load default cursor image');
    };
    testDefault.src = '/cursor-default.png';

    const testHover = new Image();
    testHover.onload = () => {
      console.log('✓ Hover cursor image loaded:', testHover.width + 'x' + testHover.height);
    };
    testHover.onerror = () => {
      console.error('✗ Failed to load hover cursor image');
    };
    testHover.src = '/cursor-hoverr.png';

    // Apply cursor with multiple fallbacks
    const applyCursor = () => {
      const cursorStyle = "url('/cursor-default.png') 0 0, url('/cursor-default.png'), auto";
      document.documentElement.style.setProperty('cursor', cursorStyle, 'important');
      document.body.style.setProperty('cursor', cursorStyle, 'important');
      
      // Also add to root div
      const rootDiv = document.getElementById('root');
      if (rootDiv) {
        rootDiv.style.setProperty('cursor', cursorStyle, 'important');
      }
    };

    // Try applying immediately
    applyCursor();
    
    // Also try after a short delay
    setTimeout(applyCursor, 100);
  }, []);

  return (
    <div 
      id="app-root"
      className="bg-[#171717] text-white min-h-screen" 
      style={{ 
        cursor: "url('/cursor-default.png') 0 0, url('/cursor-default.png'), auto"
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
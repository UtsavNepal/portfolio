import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';

const App = () => (
  <div id="app-root" className="bg-night text-cream min-h-screen font-sans">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 bg-atelier">
              <h1 className="font-display text-4xl text-cream">Page not found</h1>
              <a href="/" className="text-gold hover:text-gold-soft transition-colors">
                Back to home
              </a>
            </div>
          }
        />
      </Routes>
    </Router>
  </div>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About/About';


const App = () => {
  return (
    <div className="bg-[#171717] text-white min-h-screen">
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
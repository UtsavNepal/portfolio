import React, { useState } from 'react';
import utsavImg from '../Public/Images/Utsav.png';

const IntroSplash = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleClose = () => {
    if (isLeaving) return;
    setIsLeaving(true);
    setTimeout(() => {
      setShow(false);
      onFinish && onFinish();
    }, 600);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#111111] text-white transition-opacity duration-500 ${
        isLeaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="max-w-3xl w-[90vw] flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/2 overflow-hidden rounded-3xl border border-red-600/60 bg-black">
          <div className="absolute inset-0 border-[2px] border-red-600/80 m-4 pointer-events-none" />
          <img
            src={utsavImg}
            alt="Utsav portrait"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start">
          <p className="text-sm tracking-[0.25em] text-red-500 mb-2 uppercase">
            Utsav Nepal
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
            Work Smart, <span className="text-red-500">Not Hard</span>
          </h1>
          <p className="text-sm text-gray-300 mb-6 max-w-md">
            Full Stack Engineer crafting clean experiences with a sharp
            eye for visual detail and performance. Step into the portfolio
            to see the work.
          </p>
          <button
            onClick={handleClose}
            className="px-6 py-3 rounded-full bg-red-600 text-white font-semibold text-sm tracking-wide uppercase shadow-lg hover:bg-red-500 transition-transform transform hover:-translate-y-0.5"
          >
            See Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSplash;



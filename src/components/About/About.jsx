import React, { useState } from "react";
import who from './Who.png';
import whoDesktop from './Who-a.png';
import CV from './UtsavNepal-Tech-CV.pdf';
import { IoDocumentTextOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const SOCIALS = [
  { href: "https://www.facebook.com/utsav.simpleguy", icon: <FaFacebook /> },
  { href: "https://github.com/UtsavNepal", icon: <FaGithub /> },
  { href: "https://www.instagram.com/mr.utsavnepal__/", icon: <FaInstagram /> },
  { href: "https://www.linkedin.com/in/utsav-npl-153409289/", icon: <FaLinkedin /> }
];

const aboutText =
  "I'm a Full-Stack Developer exploring DevOps with a strong interest in modern tools and practices. Curious and driven, I'm always learning and sharpening my skills to build better systems.";

const AboutMe = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleGetInTouch = () => {
    window.open("https://mail.google.com/mail/u/0/?to=utsavnepal021@gmail.com&fs=1&tf=cm");
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col md:flex-row pt-10 md:pt-12 overflow-x-hidden"
    >
      {/* Mobile Background */}
      <div
        className="absolute inset-0 w-full h-full z-0 md:hidden"
        style={{
          backgroundImage: `url(${whoDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.1) contrast(1.1) saturate(1.05)"
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-transparent via-black/10 to-black/40 md:hidden" aria-hidden="true" />

      {/* Mobile Content */}
      <div className="md:hidden relative w-full flex flex-col min-h-screen justify-end z-10">
        <div className="flex items-center absolute left-4 top-16 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full z-20">
          <IoLocationOutline className="text-cyan-400 w-4 h-4 mr-1.5" />
          <span className="text-white font-medium text-xs drop-shadow-lg">Hetauda, Nepal</span>
        </div>
        
        <div className="w-full px-4 pb-6 pt-5 mt-auto bg-gradient-to-t from-black/85 via-black/60 to-black/30 backdrop-blur-sm rounded-t-3xl flex flex-col border-t border-white/10">
          <div className="flex-1 min-w-0">
            {/* Name Section */}
            <div className="mb-4">
              <h2 className="text-sm text-cyan-400 font-medium mb-1 uppercase tracking-wider">Hi, I am</h2>
              <h1 className="text-2xl font-bold text-white mb-1.5 drop-shadow-lg">Utsav Nepal</h1>
              <h3 className="text-sm text-gray-300 mb-3 drop-shadow-lg">Full Stack Developer & DevOps Enthusiast</h3>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-3 mb-4">
              {SOCIALS.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white rounded-full p-3 text-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/30 transition-all backdrop-blur-sm shadow-lg hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3 mb-4">
              <button
                onClick={handleGetInTouch}
                className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm shadow-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-[1.02]"
              >
                <IoMailOutline className="mr-2 text-lg" />
                Get In Touch
              </button>
              
              <div className="flex gap-2.5">
                <button
                  onClick={() => setShowAbout(true)}
                  className="flex-1 flex items-center justify-center px-4 py-2.5 text-sm font-semibold bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all"
                >
                  About Me
                </button>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/20 transition-all"
                >
                  <IoDocumentTextOutline className="mr-1.5 text-base" />
                  <span className="text-xs sm:text-sm">CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {showAbout && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn"
            onClick={() => setShowAbout(false)}
          >
            <div 
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative border border-gray-700/50 animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full"
                onClick={() => setShowAbout(false)}
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">U</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">About Me</h4>
                    <p className="text-xs text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {aboutText}
                </p>
                
                {/* Key Points */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-xs md:text-sm">Passionate about building scalable web applications</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-xs md:text-sm">Always learning and exploring new technologies</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-xs md:text-sm">Focused on clean code and best practices</p>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-800">
                <button
                  onClick={() => setShowAbout(false)}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-[1.02]"
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Content - Image section now on the left */}
      <div className="hidden md:flex w-1/2 bg-[#171717] flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <img
            src={whoDesktop}
            alt="Profile"
            className=" "
            style={{
              objectPosition: 'center center',
              filter: 'brightness(1.05) contrast(1.05)'
            }}
          />
        </div>
      </div>
      
      {/* Desktop Content - Text section now on the right */}
      <div
        className="hidden md:flex w-1/2 bg-[#D7D7D7] flex-col justify-center pr-12 pl-16 py-12 relative z-10"
        style={{
          clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
          paddingLeft: 'calc(4.625rem + 20px)', // 64px (pl-16) + 10px + 20px = 94px
        }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">Hi, I'm Utsav Nepal</h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">Full Stack Developer and DevOps Enthusiast</h2>
          <p className="text-black mb-6 max-w-lg">{aboutText}</p>
          
          {/* Desktop Email Button */}
          <button
            onClick={handleGetInTouch}
            className="flex items-center mb-8 px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-cyan-600 transition-all hover:scale-105"
          >
            <IoMailOutline className="mr-2 text-xl" />
            Get In Touch
          </button>
          
          <div className="flex gap-4 mb-8">
            {SOCIALS.map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer"
                className="text-black bg-white rounded-lg shadow-md p-3 text-2xl hover:bg-gray-200 transition hover:scale-105">
                {item.icon}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black text-white px-6 py-2 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-800 transition-all"
            >
              <IoDocumentTextOutline className="mr-2" />
              Download CV
            </a>
            <div className="flex items-center bg-black/5 px-4 py-2 rounded-full">
              <IoLocationOutline className="text-gray-700 w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">Hetauda, Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
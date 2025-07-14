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
      className="relative w-full min-h-screen flex flex-col md:flex-row pt-16 overflow-x-hidden"
    >
      {/* Mobile Background */}
      <div
        className="absolute inset-0 w-full h-full z-0 md:hidden"
        style={{
          backgroundImage: `url(${whoDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.05) contrast(1.05)"
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 w-full h-full z-0 bg-black/20 md:hidden" aria-hidden="true" />

      {/* Mobile Content */}
      <div className="md:hidden relative w-full flex flex-col min-h-screen justify-end z-10">
        <div className="flex items-center absolute left-3 top-20 bg-transparent">
          <IoLocationOutline className="text-cyan-400 w-5 h-5 mr-1" />
          <span className="text-white font-medium text-sm drop-shadow-lg">Hetauda, Nepal</span>
        </div>
        
        <div className="w-full px-3 pb-7 pt-6 mt-auto bg-black/20 backdrop-blur-sm rounded-t-3xl flex flex-col">
          <div className="flex-1 min-w-0">
            <h2 className="text-base text-white font-medium drop-shadow-lg">Hi, I am</h2>
            <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Utsav Nepal</h1>
            <h3 className="text-base text-gray-200 mb-2 drop-shadow-lg">Full Stack Developer and DevOps Enthusiast</h3>
            
            {/* Mobile Email Button */}
            <button
              onClick={handleGetInTouch}
              className="flex items-center justify-center w-full mb-3 px-4 py-3 bg-cyan-500 text-white rounded-full font-semibold text-sm shadow-lg hover:bg-cyan-600 transition-all"
            >
              <IoMailOutline className="mr-2 text-lg" />
              Get In Touch
            </button>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowAbout(true)}
                  className="px-4 py-2 text-sm font-semibold bg-white/90 text-black rounded-full shadow-lg hover:bg-gray-200 transition-all"
                >
                  About Me
                </button>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white/90 text-black px-4 py-2 rounded-full font-semibold text-xs shadow-lg hover:bg-gray-200 transition-all"
                >
                  <IoDocumentTextOutline className="mr-1" />
                  Download CV
                </a>
              </div>
              <div className="flex gap-3">
                {SOCIALS.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white rounded-full p-2 text-xl bg-black/40 hover:bg-black/70 transition flex items-center justify-center backdrop-blur-sm"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {showAbout && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-2xl max-w-sm w-[90vw] p-6 relative">
              <button
                className="absolute top-2 right-3 text-black text-2xl font-bold hover:text-gray-600 transition"
                onClick={() => setShowAbout(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h4 className="text-lg font-semibold mb-2 text-black">About Me</h4>
              <p className="text-black mb-2 text-sm">{aboutText}</p>
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
      <div className="hidden md:flex w-1/2 bg-[#D7D7D7] flex-col justify-center pr-12 pl-16 py-12 relative z-10" style={{clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)'}}>
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
import React, { useState } from "react";
import who from './Who.png';
import CV from './CV.pdf';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
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

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col md:flex-row pt-16 overflow-x-hidden"
    >
      {/* MOBILE: Background image and overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0 md:hidden"
        style={{
          backgroundImage: `url(${who})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 w-full h-full z-0 bg-black/60 md:hidden" aria-hidden="true" />

      {/* MOBILE: Content overlays */}
      <div className="md:hidden relative w-full flex flex-col min-h-screen justify-end z-10">
        {/* Location */}
        <div className="flex items-center absolute left-3 top-20 bg-transparent">
          <IoLocationOutline className="text-cyan-400 w-5 h-5 mr-1" />
          <span className="text-white font-medium text-sm drop-shadow">Hetauda, Nepal</span>
        </div>
        {/* Glassmorphism info card and socials */}
        <div className="w-full px-3 pb-7 pt-6 mt-auto bg-black/30 rounded-t-3xl flex flex-row justify-between items-end">
          {/* Left: About + Text + CV */}
          <div className="flex-1 min-w-0">
            <h2 className="text-base text-white font-medium">Hi, I am</h2>
            <h1 className="text-2xl font-bold text-white mb-2">Utsav Nepal</h1>
            <h3 className="text-base text-gray-200 mb-2">Full Stack Developer and DevOps Enthusiast</h3>
            <button
              onClick={() => setShowAbout(true)}
              className="mt-2 mb-3 px-4 py-2 text-sm font-semibold bg-white text-black rounded-full shadow hover:bg-gray-200 transition-all"
            >
              About Me &gt;
            </button>
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white text-black px-4 py-1 rounded-full font-semibold text-xs shadow hover:bg-gray-200 transition-all w-fit"
            >
              <IoDocumentTextOutline className="mr-1 text-black" />
              Download CV
            </a>
          </div>
          {/* Right: Socials, vertical */}
          <div className="flex flex-col gap-4 mb-1 ml-4">
            {SOCIALS.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white rounded-full p-2 text-2xl bg-black/40 hover:bg-black/70 transition flex items-center justify-center"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        {/* About Me Pop-up */}
        {showAbout && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="bg-white rounded-lg shadow-lg max-w-sm w-[90vw] p-6 relative">
              <button
                className="absolute top-2 right-3 text-black text-2xl font-bold"
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

      {/* DESKTOP: split layout, no duplicated image or nav */}
      <div className="hidden md:flex w-1/2 bg-[#D7D7D7] flex-col justify-center pl-20 pr-12 py-12 relative z-10" style={{clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)'}}>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">Hi, I'm Utsav Nepal</h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">Full Stack Developer and DevOps Enthusiast</h2>
          <p className="text-black mb-6 max-w-lg">{aboutText}</p>
          <div className="flex gap-4 mb-8">
            {SOCIALS.map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer"
                className="text-black bg-white rounded shadow p-2 text-2xl hover:bg-gray-200 transition">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-1/2 bg-[#171717] flex-col justify-center items-center relative">
        <div className="flex flex-col justify-end items-end h-full w-full relative">
          <img
            src={who}
            alt="Profile"
            className="object-cover rounded-2xl shadow-xl"
            style={{
              width: "520px",
              height: "620px",
              maxWidth: "95vw",
              maxHeight: "90vh",
              position: "absolute",
              bottom: "32px",
              right: "64px",
            }}
          />
          {/* Location and Download CV at bottom right, side by side */}
          <div
            className="absolute flex gap-4 items-center"
            style={{
              bottom: "32px",
              right: "64px",
              zIndex: 2
            }}
          >
            <div className="flex items-center bg-[#232323] px-4 py-2 rounded-full mb-2">
              <IoLocationOutline className="text-cyan-400 w-5 h-5 mr-2" />
              <span className="text-white font-medium">Hetauda, Nepal</span>
            </div>
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white text-black px-6 py-2 rounded-full font-semibold text-lg shadow hover:bg-gray-200 transition-all"
            >
              Download CV <IoDocumentTextOutline className="ml-2 text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
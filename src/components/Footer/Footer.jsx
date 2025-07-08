import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='border-t-4 border-white w-full bg-[#171717] py-8' id='contact'>
      <div className='max-w-[1140px] mx-auto px-4 flex flex-col items-center'>
        {/* Name with responsive sizing */}
        <h1 className='text-xl md:text-2xl xl:text-3xl font-bold text-white mb-4'>
          Utsav Nepal
        </h1>

        {/* Navigation links - single row */}
        <ul className='flex gap-4 sm:gap-6 mb-4 sm:mb-6'>
          {['About', 'Project', 'Skill'].map((item) => (
            <li key={item} className="text-white hover:text-gray-300 cursor-pointer text-sm sm:text-base">
              {item}
            </li>
          ))}
        </ul>

        {/* Social icons - compact layout */}
        <div className='flex gap-3 sm:gap-4 mb-4 sm:mb-6 text-xl'>
          <a href="https://www.facebook.com/utsav.simpleguy" aria-label="Facebook" className="text-white hover:text-gray-300 transition-colors">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/mr.utsavnepal__/" aria-label="Instagram" className="text-white hover:text-gray-300 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/utsav-npl-153409289/" aria-label="LinkedIn" className="text-white hover:text-gray-300 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com/UtsavNepal" aria-label="GitHub" className="text-white hover:text-gray-300 transition-colors">
            <FaGithub />
          </a>
        </div>

        {/* Copyright - smaller and subtle */}
        <p className='text-xs text-gray-400'>
          © 2025 Utsav Nepal. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer;
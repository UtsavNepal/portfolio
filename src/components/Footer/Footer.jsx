import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter,FaGithub,FaLinkedin } from 'react-icons/fa';
 
const Footer = () => {
  return (
    <div className='max-h-[45vh] border-t-4 border-black mt-44 md:mt-0 w-full bg-[#D7D7D7]' id='contact'>
      <div className='max-w-[1140px] h-full m-auto flex flex-col items-center'>
        <h1 className='p-3 sm:p-5 md:p-10 text-lg sm:text-xl md:text-3xl xl:text-5xl tracking-wide font-bold text-black'>Utsav Nepal</h1>
        <ul className='gap-8 flex pb-3 sm:pb-5 md:pb-10 text-lg sm:text-xl md:text-1xl font-mono xl:text-2xl tracking-wide'>
          <li className="text-black hover:text-gray-700 cursor-pointer">About</li>
          <li className="text-black hover:text-gray-700 cursor-pointer">Project</li>
          <li className="text-black hover:text-gray-700 cursor-pointer">Skill</li>
        </ul>
        <div className='flex gap-4 text-lg sm:text-xl md:text-3xl pb-10'>
          <a href="https://www.facebook.com/utsav.simpleguy" className="text-black hover:text-gray-700"> <FaFacebook /></a>
          <a href="https://www.instagram.com/mr.utsavnepal__/" className="text-black hover:text-gray-700"> <FaInstagram /></a>
          <a href="https://www.linkedin.com/in/utsav-npl-153409289/" className="text-black hover:text-gray-700"> <FaLinkedin /></a>
          <a href="https://github.com/UtsavNepal" className="text-black hover:text-gray-700"> <FaGithub /></a>
        </div>
        <p className='p-5 text-sm font-bold text-black'>©copyright expire 2025. all rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;
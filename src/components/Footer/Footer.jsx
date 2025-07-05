import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter,FaGithub,FaLinkedin   } from 'react-icons/fa';
 
  
 const Footer = () => {
   return (
    <div className='max-h-[45vh] border-t-2 mt-44 md:mt-0 border-black border-solid w-full bg-white  ' id='contact'>
    <div className='max-w-[1140px] h-full    m-auto flex flex-col    items-center'>
      <h1 className=' p-3 sm:p-5 md:p-10   text-lg sm:text-xl  md:text-3xl  xl:text-5xl tracking-wide font-lg  '>Utsav Nepal</h1>
      <ul className='gap-8 flex pb-3 sm:pb-5 md:pb-10   text-lg sm:text-xl  md:text-1xl font-mono xl:text-2xl tracking-wide font-lg'>
      <li>About</li>
      <li>Project</li>
      <li>Skill</li>
      </ul>
      <div className='flex  gap-4 text-lg sm:text-xl  md:text-3xl pb-10'>
         <a href="https://www.facebook.com/utsav.simpleguy">  <FaFacebook /></a>
         <a href="https://www.instagram.com/mr.utsavnepal__/"> <FaInstagram /></a>
         <a href="https://www.linkedin.com/in/utsav-npl-153409289/">  <FaLinkedin />  </a>
         <a href="https://github.com/UtsavNepal"> <FaGithub /></a>
      </div>
      <p className='p-5 text-sm font-bold'>©copyright expire 2025. all rights reserved </p>
      </div>
      </div>
   )
 }
 
 export default Footer

 /* <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />*/

import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="border-t border-night-line bg-night py-14 px-5" id="contact">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end md:justify-between gap-8">
      <div>
        <p className="font-display text-3xl text-cream mb-2">
          Utsav Nepal<span className="text-gold">.</span>
        </p>
        <p className="text-cream-mute text-sm max-w-sm leading-relaxed">
          Full Stack Developer based in Hetauda — open to meaningful collaborations.
        </p>
      </div>

      <div className="flex flex-col items-start md:items-end gap-4">
        <div className="flex gap-4 text-lg">
          <a href="https://www.facebook.com/utsav.simpleguy" aria-label="Facebook" className="text-cream-mute hover:text-gold transition-colors">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/mr.utsavnepal__/" aria-label="Instagram" className="text-cream-mute hover:text-gold transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/utsav-npl-153409289/" aria-label="LinkedIn" className="text-cream-mute hover:text-gold transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com/UtsavNepal" aria-label="GitHub" className="text-cream-mute hover:text-gold transition-colors">
            <FaGithub />
          </a>
        </div>
        <p className="text-xs text-cream-mute/70">© {new Date().getFullYear()} Utsav Nepal</p>
      </div>
    </div>
  </footer>
);

export default Footer;

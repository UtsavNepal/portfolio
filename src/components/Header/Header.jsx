import React, { useState, useEffect } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experiences' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
];

const Header = ({ onContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-night/85 backdrop-blur-md border-b border-night-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 py-4">
        <ScrollLink
          to="about"
          smooth
          duration={500}
          offset={0}
          className="font-display text-2xl font-semibold tracking-wide text-cream cursor-pointer"
        >
          Utsav<span className="text-gold">.</span>
        </ScrollLink>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              offset={-72}
              className="text-sm text-cream-mute hover:text-cream transition-colors cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
          <button
            type="button"
            onClick={onContact}
            className="btn-primary !py-2.5 !px-5 text-xs uppercase tracking-[0.14em]"
          >
            Contact
          </button>
        </nav>

        <button
          type="button"
          className="md:hidden text-cream text-2xl"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-night-line bg-night/95 backdrop-blur-md px-5 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              offset={-72}
              className="text-cream py-1 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onContact?.();
            }}
            className="btn-primary mt-1"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

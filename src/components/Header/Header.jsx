// src/components/Header.tsx
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';
import ContactModal from '../Contactme/ContactModal';

const navLinks = [
  { name: 'Home', to: 'about' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experiences' },
  { name: 'Project', to: 'projects' },
  { name: 'Skill', to: 'skills' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      <header className="fixed w-full top-0 left-0 z-50 bg-black">
        <div className="flex items-center justify-between px-4 md:px-12 py-4">
          <span className="font-bold text-lg text-white">Utsav</span>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white font-medium cursor-pointer hover:underline"
              >
                {link.name}
              </ScrollLink>
            ))}
            <button
              onClick={handleModalOpen}
              className="ml-4 px-5 py-2 bg-white text-black font-medium rounded-full shadow hover:bg-gray-200 transition cursor-pointer"
            >
              CONTACT ME
            </button>
          </nav>
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <IoMenu />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black w-full px-6 py-4 flex flex-col gap-3 border-t-2 border-cyan-400">
            {navLinks.map(link => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white font-medium cursor-pointer py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <button
              onClick={handleModalOpen}
              className="px-5 py-2 mt-2 bg-white text-black font-medium rounded-full shadow hover:bg-gray-200 transition cursor-pointer"
            >
              CONTACT ME
            </button>
          </div>
        )}
      </header>

      {/* Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Header;

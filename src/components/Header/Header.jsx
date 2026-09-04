// src/components/Header.tsx
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';
import ContactModal from '../Contactme/ContactModal';
import profileImg from '../About/Who-a.png';

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
      <header className="fixed w-full top-0 left-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800/50">
        <div className="flex items-center justify-between px-4 md:px-12 py-3">
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-cyan-500/50 shadow-lg ring-2 ring-cyan-500/20 transition-all duration-300 group-hover:border-cyan-400 group-hover:ring-cyan-400/40 group-hover:shadow-cyan-500/50 overflow-visible">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={profileImg} 
                    alt="Utsav Nepal" 
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-150"
                  />
                </div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-black group-hover:scale-110 transition-transform duration-300 z-10"></div>
            </div>
            <span className="font-bold text-lg md:text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">Utsav</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <ScrollLink
                key={link.name}
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
                key={link.name}
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

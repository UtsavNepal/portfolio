import React, { useEffect } from 'react';
import Contact from './contact';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-night/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-night w-full max-w-4xl max-h-[92vh] overflow-y-auto relative border border-night-line p-3 sm:p-5">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-cream-mute hover:text-cream text-2xl z-10"
          aria-label="Close"
        >
          ×
        </button>
        <Contact />
      </div>
    </div>
  );
};

export default ContactModal;

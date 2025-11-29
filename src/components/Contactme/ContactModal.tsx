// src/components/Contactme/ContactModal.tsx
import React, { useEffect } from 'react';
import Contact from './contact';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Disable body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="bg-gray-900 p-4 sm:p-6 rounded-lg w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto md:overflow-y-visible relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-3 md:right-3 text-white text-2xl hover:text-red-400 z-10 bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>
        <div className="md:overflow-y-visible">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

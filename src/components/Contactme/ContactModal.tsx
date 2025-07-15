// src/components/Contactme/ContactModal.tsx
import React from 'react';
import Contact from './contact';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-4xl overflow-y-auto max-h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
        >
          ×
        </button>
        <Contact />
      </div>
    </div>
  );
};

export default ContactModal;

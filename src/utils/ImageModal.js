import React from "react";
import { FaTimes } from "react-icons/fa"; // Close icon

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null; // Only render the modal if it is open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 relative max-w-4xl w-full shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black rounded-full p-2 hover:bg-gray-800 transition"
          >
          <FaTimes size={24} />
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageModal;

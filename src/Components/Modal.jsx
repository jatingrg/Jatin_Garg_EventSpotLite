import React from "react";
import 'animate.css';
import { RxCross1 } from "react-icons/rx";

const Modal = ({ isOpen, onClose, event, fadeOut }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
      <div className={`bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative ${fadeOut ? 'animate__animated animate__fadeOut' : 'animate__animated animate__fadeIn'}`}>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600" 
        >
          <RxCross1 fontSize={25} />
        </button>
        <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <p className="text-gray-600">Location: {event.location}</p>
        <p className="text-gray-600">Date: {event.date}</p>
      </div>
    </div>
  );
};

export default Modal;

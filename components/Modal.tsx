// MyModal.js
import React from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-30 w-full h-screen bg-white ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex h-full">
        <span
          className="absolute top-20 right-0 text-2xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

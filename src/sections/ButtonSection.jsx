import React from 'react';
import { buttonImage } from '../assets/images'; // Replace with your actual image path

const ButtonSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center ">
      <button
        onClick={() => alert('Button clicked!')} // Replace with your desired action
        className="relative bg-transparent border-none p-0 cursor-pointer"
      >
        <img 
          src={buttonImage} 
          alt="Click Me" 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" 
        />
      </button>
    </section>
  );
};

export default ButtonSection;

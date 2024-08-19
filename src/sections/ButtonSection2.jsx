

import React from 'react';
import { buttonImage } from '../assets/images'; // Replace with your actual image path

const ButtonSection2 = ({ linkUrl }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 bg-transparent hover:bg-blue-700 transition-colors duration-300 rounded-full"
      >
        <img src={buttonImage} alt="Button" className="w-full h-full" />
      </a>
    </div>
  );
};

export default ButtonSection2;

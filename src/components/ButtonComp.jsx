import React, { useState } from 'react';

const ButtonComp = ({ text, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset click effect after 200ms
    onClick(); // Call onClick function passed as prop
  };

  return (
    <button
      className='w-auto bg-gradient-to-tr from-blue-500 to-blue-950 text-2xl border-2 rounded-3xl p-3 text-white'
      onClick={handleClick}
      style={{
        transform: isClicked ? 'scale(0.95)' : 'scale(1)',
        transition: 'transform 0.2s ease-in-out',
        background: isClicked ? 'blue' : 'linear-gradient(to top right, #0055ff, #9900cc)',
      }}
    >
      {text}
    </button>
  );
};

export default ButtonComp;

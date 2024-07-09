import React, { useState } from 'react';

const QuestionCard = ({ questionNumber, question, choices, correctAnswer, onClick }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
    onClick(choice); // Pass selected choice to parent onClick handler
  };

  return (
    <div className='grid place-items-center mt-[200px]'>
      <div className='w-fit border border-gray-300 bg-gray-50 rounded-2xl p-[50px]'>
        <h2 className='text-xl'>{questionNumber}. {question}</h2>
        <div className='grid mt-7 grid-cols-2 gap-y-8 max-w-[500px] ml-[50px]'>
          {choices.map((choice, index) => (
            <div
              key={index}
              className={`border w-fit p-2 rounded-md cursor-pointer border-black ${selectedChoice === choice ? 'bg-gradient-to-tr from-blue-500 to-blue-950 text-white' : ''}`}
              onClick={() => handleChoiceClick(choice)}
            >
              {choice}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

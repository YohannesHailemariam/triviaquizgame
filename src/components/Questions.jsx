import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import ButtonComp from './ButtonComp';

const Questions = () => {
  const quizData = [
    {
      questionNumber: 1,
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      questionNumber: 2,
      question: "Which element has the chemical symbol 'O'?",
      choices: ["Gold", "Oxygen", "Silver", "Iron"],
      answer: "Oxygen"
    },
    {
      questionNumber: 3,
      question: "Which JavaScript method is used to write HTML output?",
      choices: ["print", "write", "document.write", "console.log"],
      answer: "document.write"
    },
    {
      questionNumber: 4,
      question: "Which attribute is used to specify an image's source in HTML?",
      choices: ["src", "href", "link", "url"],
      answer: "src"
    },
    {
      questionNumber: 5,
      question: "Which CSS property is used to make text bold?",
      choices: ["font-style", "font-weight", "font-size", "font-family"],
      answer: "font-weight"
    },
    {
      questionNumber: 6,
      question: "Which HTML tag is used to create an unordered list?",
      choices: ["ul", "ol", "li", "dl"],
      answer: "ul"
    },
    {
      questionNumber: 7,
      question: "Which method can be used to select an element by its ID in JavaScript?",
      choices: ["getElementById", "getElementByClass", "querySelector", "querySelectorAll"],
      answer: "getElementById"
    },
    {
      questionNumber: 8,
      question: "Which CSS property controls the text size?",
      choices: ["font-weight", "font-style", "font-size", "font-family"],
      answer: "font-size"
    },
    {
      questionNumber: 9,
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      choices: ["alt", "src", "title", "href"],
      answer: "alt"
    },
    {
      questionNumber: 10,
      question: "Which HTML element is used to define a table cell?",
      choices: ["table", "th", "tr", "td"],
      answer: "td"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0); // Track animation direction
  const [result, setResult] = useState(0); // Track correct answers
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started
  const itemsPerPage = 1; // Display one question per page

  const handlePageChange = (page) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(quizData.length / itemsPerPage);
  const displayedQuestions = quizData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleChoiceClick = (choice, correctAnswer) => {
    if (choice === correctAnswer) {
      setResult(result + 1);
    }
  };

  const handleRestart = () => {
    setCurrentPage(1);
    setResult(0);
  };

  // Determine if all questions have been answered
  const allQuestionsAnswered = currentPage > totalPages;

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-[-100px] overflow-hidden">
      {!gameStarted ? (
        <div className="flex flex-col items-center justify-center h-full">
          <button
            className="bg-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            onClick={() => setGameStarted(true)}
          >
            Start Game
          </button>
        </div>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="relative w-full h-[500px]">
            {allQuestionsAnswered ? (
              <div className="text-3xl font-bold text-center bg-blue-100 w-fit ml-[600px] mt-[230px] p-8 rounded-lg shadow-lg">
                <p className="text-blue-600">Your score:</p>
                <p className="text-blue-800 text-5xl">{result} / 10</p>
                <button
                  className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                  onClick={handleRestart}
                >
                  Restart Game
                </button>
              </div>
            ) : (
              displayedQuestions.map((question) => (
                <QuestionCard
                  key={question.questionNumber}
                  questionNumber={question.questionNumber}
                  question={question.question}
                  choices={question.choices}
                  correctAnswer={question.answer}
                  onClick={(choice) => handleChoiceClick(choice, question.answer)}
                />
              ))
            )}
          </div>
          <div className='grid grid-cols-2 gap-5'>
            {!allQuestionsAnswered && (
              <ButtonComp 
                text="Previous Question" 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1} 
              />
            )}
            {!allQuestionsAnswered && (
              <ButtonComp 
                text="Next Question" 
                onClick={() => handlePageChange(currentPage + 1)} 
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;

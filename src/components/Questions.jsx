import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

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

  const [result, setResult] = useState(0);

  const handleChoiceClick = (choice, correctAnswer) => {
    if (choice === correctAnswer) {
      setResult(result + 1);
    }
  };

  return (
    <div>
      {quizData.map((item) => (
        <QuestionCard 
          key={item.questionNumber}
          questionNumber={item.questionNumber}
          question={item.question}
          choices={item.choices}
          correctAnswer={item.answer}
          onClick={(choice) => handleChoiceClick(choice, item.answer)}
        />
      ))}
    </div>
  );
};

export default Questions;

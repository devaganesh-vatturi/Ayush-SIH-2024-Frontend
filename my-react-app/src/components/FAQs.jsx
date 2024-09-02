import React, { useState } from "react";

const FAQ = () => {
  
  const faqData = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML." },
    { question: "What are hooks in React?", answer: "Hooks are functions that let you use state and other React features in functional components." },
    { question: "What is a component?", answer: "A component in React is a reusable piece of UI that can be used in different parts of an application." },
  ];

  
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  
  const toggleAnswer = (index) => {
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index}>
          <p
            onClick={() => toggleAnswer(index)}
            style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
          >
            {item.question}
          </p>
          {visibleAnswerIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

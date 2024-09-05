import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [amount, setAmount] = useState(10);
  const [customQuiz, setCustomQuiz] = useState([]);
  const [time, setTime] = useState(30); // Timer default

  return (
    <QuizContext.Provider value={{ 
      questions, 
      setQuestions, 
      category, 
      setCategory, 
      difficulty, 
      setDifficulty, 
      amount, 
      setAmount, 
      customQuiz, 
      setCustomQuiz, 
      time, 
      setTime 
    }}>
      {children}
    </QuizContext.Provider>
  );
};

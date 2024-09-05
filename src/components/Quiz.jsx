import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../context/QuizContext';
import Timer from './Timer';

const Quiz = () => {
  const { questions, time } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!questions || questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    if (!currentQuestion || selectedAnswer) return;

    setSelectedAnswer(answer);
    if (answer === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  if (showResult) {
    return (
      <div className="p-4 text-white">
        <h2 className="text-2xl">Quiz Completed!</h2>
        <p>Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl text-white mb-4">{currentQuestion.question}</h2>
      <Timer duration={time} onTimeUp={() => handleAnswerSelect(null)} questionIndex={currentQuestionIndex} />
      <div className="space-y-2">
        {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer)
          .sort()
          .map((answer, index) => (
            <button 
              key={index} 
              onClick={() => handleAnswerSelect(answer)} 
              className={`w-full p-2 rounded border ${
                selectedAnswer === answer ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}>
              {answer}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Quiz;

import React, { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext.jsx';
import Quiz from '../components/Quiz';

const CustomQuiz = () => {
  const { setCustomQuiz, customQuiz } = useContext(QuizContext);
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [incorrectAnswers, setIncorrectAnswers] = useState(['', '', '']);
  const [quizStarted, setQuizStarted] = useState(false);  // State for managing quiz start

  const addQuestion = () => {
    setCustomQuiz([...customQuiz, {
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    }]);
    setQuestion('');
    setCorrectAnswer('');
    setIncorrectAnswers(['', '', '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customQuiz.length === 0) {
      alert('Please add at least one question before starting the quiz.');
      return;
    }
    setQuizStarted(true);  // Start the quiz on form submission
  };

  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center bg-gray-800">
      {!quizStarted ? (
        <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Create Custom Quiz</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Question</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Correct Answer</label>
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Incorrect Answers</label>
            {incorrectAnswers.map((answer, index) => (
              <input
                key={index}
                type="text"
                value={answer}
                onChange={(e) => {
                  const newAnswers = [...incorrectAnswers];
                  newAnswers[index] = e.target.value;
                  setIncorrectAnswers(newAnswers);
                }}
                className="w-full p-2 border border-gray-300 rounded mb-2"
                required
              />
            ))}
          </div>
          <button type="button" onClick={addQuestion} className="w-full bg-blue-500 text-white p-2 rounded mb-4">
            Add Question
          </button>
          {customQuiz.length > 0 && (
            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
              Start Quiz
            </button>
          )}
        </form>
      ) : (
        <Quiz />
      )}
    </div>
  );
};

export default CustomQuiz;

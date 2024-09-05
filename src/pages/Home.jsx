import React, { useState } from "react";
import QuizForm from "../components/QuizForm";
import Quiz from "../components/Quiz";
import useQuizAPI from "../api/useQuizAPI";

const Home = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const { loading, fetchQuizData } = useQuizAPI();

  const startQuiz = () => {
    fetchQuizData(); // Trigger API request after form submission
    setIsQuizStarted(true);
  };

  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center bg-gray-800">
      {isQuizStarted ? (
        loading ? (
          <div>Loading...</div>
        ) : (
          <Quiz />
        )
      ) : (
        <QuizForm startQuiz={startQuiz} />
      )}
    </div>
  );
};

export default Home;

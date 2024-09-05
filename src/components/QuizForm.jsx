import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const QuizForm = ({ startQuiz }) => {
  const {
    amount,
    setAmount,
    time,
    setTime,
    category,
    setCategory,
    difficulty,
    setDifficulty,
  } = useContext(QuizContext);

  const categories = [
    { id: "", name: "Any Category" },
    { id: "17", name: "Science & Nature" },
    { id: "9", name: "Geography" },
    { id: "23", name: "History" },
    { id: "22", name: "General Knowledge" },
    // Add more categories here
  ];

  const difficulties = [
    { value: "", name: "Any Difficulty" },
    { value: "easy", name: "Easy" },
    { value: "medium", name: "Medium" },
    { value: "hard", name: "Hard" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    startQuiz();
  };

  return (
    <>
      <form
        className="space-y-4 p-4 bg-white shadow-md rounded"
        onSubmit={handleSubmit}
      >
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Number of Questions"
          min="1"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          {difficulties.map((diff) => (
            <option key={diff.value} value={diff.value}>
              {diff.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Time per Question (seconds)"
          min="10"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Start Quiz
        </button>
      </form>
    </>
  );
};

export default QuizForm;

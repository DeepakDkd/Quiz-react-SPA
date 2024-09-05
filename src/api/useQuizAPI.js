import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";

const useQuizAPI = () => {
  const { amount, category, difficulty, setQuestions } =
    useContext(QuizContext);
  const [loading, setLoading] = useState(false);

  const fetchQuizData = async () => {
    setLoading(true);
    try {
      const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchQuizData };
};

export default useQuizAPI;

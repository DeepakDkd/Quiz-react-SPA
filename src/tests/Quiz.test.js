import { render, screen } from '@testing-library/react';
import Quiz from '../components/Quiz';
import { QuizProvider } from '../context/QuizContext';

test('renders quiz question', () => {
  const mockQuestions = [{
    question: "What's the capital of France?",
    correct_answer: "Paris",
    incorrect_answers: ["London", "Rome", "Berlin"]
  }];

  render(
    <QuizProvider value={{ questions: mockQuestions }}>
      <Quiz />
    </QuizProvider>
  );

  const questionElement = screen.getByText(/What's the capital of France?/i);
  expect(questionElement).toBeInTheDocument();
});

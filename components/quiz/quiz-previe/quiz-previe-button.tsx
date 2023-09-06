"use client";
import Link from "next/link";
import { FC, useContext } from "react";
import { MainContext } from "../../../context/context";

interface ParamsProps {
  params: {
    category: string;
    difficulty: string;
  };
}

const StartQuizButton: FC<ParamsProps> = ({ params }) => {
  const { quizzes } = useContext(MainContext);
  const existingQuiz = quizzes.find(
    (el) =>
      el.category === params.category && el.difficulty === params.difficulty
  );
  return (
    <Link
      className={`quiz-previe-container_content-button btn ${
        existingQuiz ? `disable--btn` : ``
      } `}
      href={`${
        existingQuiz
          ? `/quiz/preview/${params.category}/${params.difficulty}`
          : `/quiz/${params.category}/${params.difficulty}`
      }`}
    >
      Start Quiz
    </Link>
  );
};

export default StartQuizButton;

"use client";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
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
    <div className="quiz-previe-container_content_button-container">
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
      {existingQuiz && (
        <Link
          href="/my-quizzies"
          className="quiz-previe-container-link-to-myquizzes"
        >
          quizzes list
          <HiArrowNarrowRight />
        </Link>
      )}
    </div>
  );
};

export default StartQuizButton;

"use client";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FC, useContext } from "react";
import { MainContext } from "../../../context/context";

interface ParamsProps {
  data: {
    category: string;
    difficulty: string;
    questionsObj: unknown[];
  };
}

const StartQuizButton: FC<ParamsProps> = ({ data }) => {
  const { quizzes, addQuiz } = useContext(MainContext);
  const existingQuiz = quizzes.find(
    (el) => el.category === data.category && el.difficulty === data.difficulty
  );

  const handleQuestions = () => {
    if (!existingQuiz) {
      addQuiz({
        category: data.category,
        difficulty: data.difficulty,
        questions: data.questionsObj,
        numOfQuestion: 0,
        status: "unfinished",
        scoredPoints: 0,
      });
    }
  };

  return (
    <div className="quiz-previe-container_content_button-container">
      <Link
        onClick={() => handleQuestions()}
        className={`quiz-previe-container_content-button btn ${
          existingQuiz ? `disable--btn` : ``
        } `}
        href={`${
          existingQuiz
            ? `/quiz/preview/${data.category}/${data.difficulty}`
            : `/quiz/${data.category}/${data.difficulty}`
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

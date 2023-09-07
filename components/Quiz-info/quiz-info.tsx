"use client";
import { useContext, FC, useState, useCallback } from "react";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";
import StatusElement from "./quiz-info-status";
import InfoContainer from "./quiz-info-container";
import { MainContext } from "../../context/context";
import QuizSummary from "../quiz/quiz-summary";
import Quiz from "../quiz/quiz";
import getArrOfAnswers from "@/utils/getArrayOfAnswers";
import getCorrectAnswers from "@/utils/getCorrectAnswers";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}
const QuizInfo: FC<ParamsSlug> = ({ params }) => {
  const Context = useContext(MainContext);
  const [summaryQuestionsPrevie, setSummaryQuestionsPrevie] = useState<
    number[]
  >([]);

  const curQuiz = Context.quizzes.find(
    (el) =>
      el.category === params.category && el.difficulty === params.difficulty
  );

  return (
    <section
      className="my-quizzes-info"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(245, 246, 252, 0.73)),url(/mini-${params.category}.jpg)`,
      }}
    >
      {curQuiz?.status === "unfinished" && (
        <>
          <div className="my-quizzes-info_container">
            <div className="my-quizzes-info_container_core-info-container">
              <span className="my-quizzes-info_container_core-info-container-category">{`${params.category}`}</span>
              <span className="my-quizzes-info_container_core-info-container-difficulty">{`${params.difficulty}`}</span>
            </div>

            <StatusElement
              params={{
                category: params.category,
                difficulty: params.difficulty,
              }}
            />

            <InfoContainer
              params={{
                category: params.category,
                difficulty: params.difficulty,
              }}
              curQuiz={curQuiz}
            />

            <Link
              href="/my-quizzies"
              className="my-quizzes-info_container-link"
            >
              <HiArrowSmLeft />
            </Link>
          </div>
          <div className="my-quizzes-info--backdrop-filter"></div>
        </>
      )}
      {curQuiz?.status === "finished" && (
        <>
          <QuizSummary
            quizziesInfo={curQuiz}
            addQuestion={setSummaryQuestionsPrevie}
          />
          {summaryQuestionsPrevie.map((el, index) => {
            return (
              <Quiz
                key={index}
                quizzies={curQuiz.questions}
                numOfcurQuiz={el}
                arrOfAnswers={getArrOfAnswers(curQuiz.questions, el)}
                summary={true}
                corAnswer={getCorrectAnswers(curQuiz.questions, el)}
              />
            );
          })}
        </>
      )}
    </section>
  );
};

export default QuizInfo;

"use client";
import { useContext, FC, useState } from "react";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";
import StatusElement from "./quiz-info-status";
import InfoContainer from "./quiz-info-container";
import { MainContext } from "../../context/context";
import QuizSummary from "../quiz/quiz-summary";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}
const QuizInfo: FC<ParamsSlug> = ({ params }) => {
  const Context = useContext(MainContext);
  const [summaryQuestionsPrevie, setSummaryQuestionsPrevie] = useState<any[]>(
    []
  );

  const curQuiz = Context.quizzes.find(
    (el) =>
      el.category === params.category && el.difficulty === params.difficulty
  );

  const addQuestionsPrevie = (question: any) => {
    setSummaryQuestionsPrevie((prev) => {
      if (prev.find((el) => el.id === question.id)) {
        return prev;
      }
      return [question, ...prev];
    });
  };

  return (
    <section
      className="my-quizzes-info"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(245, 246, 252, 0.73)),url(/mini-${params.category}.jpg)`,
        justifyContent: `${
          summaryQuestionsPrevie.length > 0 ? "flex-start" : "center"
        }`,
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
            animation="false"
            addQuestion={addQuestionsPrevie}
            activeQuestion={summaryQuestionsPrevie}
          />
          {summaryQuestionsPrevie.map((el, index) => {
            return <p key={index}>{index}</p>;
          })}
        </>
      )}
    </section>
  );
};

export default QuizInfo;

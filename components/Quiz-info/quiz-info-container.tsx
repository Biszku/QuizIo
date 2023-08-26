"use client";
import { useContext, FC } from "react";
import { MainContext } from "../../context/context";

import ContinueElement from "./quiz-info-continue";
import FinishedElement from "./quiz-info-finished";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}

const InfoContainer: FC<ParamsSlug> = ({ params }) => {
  const Context = useContext(MainContext);

  const curQuiz = Context.quizzes.find(
    (el) =>
      el.category === params.category && el.difficulty === params.difficulty
  );

  return (
    <div className="my-quizzes-info_container_info-container">
      {curQuiz?.status === "finished" && (
        <FinishedElement quizziesQuestions={curQuiz.questions} />
      )}
      {curQuiz?.status === "unfinished" && (
        <ContinueElement
          quizziesQuestions={curQuiz.questions}
          params={{ category: params.category, difficulty: params.difficulty }}
          numOfCurQuiz={curQuiz.numOfQuestion}
        />
      )}
    </div>
  );
};
export default InfoContainer;

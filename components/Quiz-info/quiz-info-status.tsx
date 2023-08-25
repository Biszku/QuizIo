"use client";
import { useContext, FC } from "react";
import { MainContext } from "../../context/context";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}

const StatusElement: FC<ParamsSlug> = ({ params }) => {
  const Context = useContext(MainContext);

  const curQuiz = Context.quizzes.find(
    (el) =>
      el.category === params.category && el.difficulty === params.difficulty
  );

  return (
    <span className="my-quizzes-info_container-status">{`${curQuiz?.status}`}</span>
  );
};

export default StatusElement;

import QuizContent from "../../../components/quiz/quiz-content";
import { FC } from "react";

interface ParamsSlug {
  params: {
    quiz: string[];
  };
}

const Quiz: FC<ParamsSlug> = ({ params }) => {
  return <QuizContent parameters={params} />;
};

export default Quiz;

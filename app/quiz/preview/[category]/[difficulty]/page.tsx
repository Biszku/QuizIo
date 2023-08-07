import QuizPrevie from "../../../../../components/quiz/quiz-previe/quiz-previe";
import { FC } from "react";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}

const QuizUser: FC<ParamsSlug> = ({ params }) => {
  return <QuizPrevie params={params} />;
};

export default QuizUser;

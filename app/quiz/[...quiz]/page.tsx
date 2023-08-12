import GetQuzzies from "../../../utils/getQuzzies";
import { FC } from "react";
import QuizContent from "../../../components/quiz/quiz-content";

interface ParamsSlug {
  params: {
    quiz: string[];
  };
}

const Quiz: FC<ParamsSlug> = async ({ params }) => {
  const [category, difficult] = params.quiz;
  const quiz = await GetQuzzies(category, difficult);
  return <QuizContent data={quiz} />;
};

export default Quiz;

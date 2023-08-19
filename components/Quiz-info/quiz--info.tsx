import { FC } from "react";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}

const QuizInfo: FC<ParamsSlug> = ({ params }) => {
  const { category, difficulty } = params;
  return <h1>{`${category}, ${difficulty}`}</h1>;
};

export default QuizInfo;

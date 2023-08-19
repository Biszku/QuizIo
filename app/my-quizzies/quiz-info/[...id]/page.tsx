import QuizInfo from "@/components/Quiz-info/quiz--info";
import { FC } from "react";

interface ParamsSlug {
  params: {
    id: string[];
  };
}

const MyQuizInfo: FC<ParamsSlug> = ({ params }) => {
  const [category, difficulty] = params.id;

  return <QuizInfo params={{ category, difficulty }} />;
};

export default MyQuizInfo;

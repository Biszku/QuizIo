import { FC } from "react";

import ContinueElement from "./quiz-info-continue";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
  curQuiz:
    | {
        category: string;
        difficulty: string;
        status: string;
        questions: any[];
        numOfQuestion: number;
        scoredPoints: number;
      }
    | undefined;
}

const InfoContainer: FC<ParamsSlug> = ({ params, curQuiz }) => {
  return (
    curQuiz !== undefined && (
      <div className="my-quizzes-info_container_info-container">
        <ContinueElement
          quizziesQuestions={curQuiz.questions}
          params={{ category: params.category, difficulty: params.difficulty }}
          numOfCurQuiz={curQuiz.numOfQuestion}
        />
      </div>
    )
  );
};
export default InfoContainer;

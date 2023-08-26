import { FC } from "react";
import Link from "next/link";
interface QuizziesInfoType {
  quizziesQuestions: any[];
  numOfCurQuiz: number;
  params: {
    category: string;
    difficulty: string;
  };
}

const ContinueElement: FC<QuizziesInfoType> = ({
  quizziesQuestions,
  numOfCurQuiz,
  params,
}) => {
  const Questions = quizziesQuestions;
  return (
    <>
      <div className="my-quizzes-info_container_info-container_unfinished-container">
        <span className="my-quizzes-info_container_info-container_unfinished-container-cur-question">
          {`${numOfCurQuiz + 1}`}
          <span className="my-quizzes-info_container_info-container_unfinished-container-cur-question-span">
            current question
          </span>
        </span>
        <span className="my-quizzes-info_container_info-container_unfinished-container-on">
          on
        </span>
        <span className="my-quizzes-info_container_info-container_unfinished-container-total-questions">{`${Questions.length}`}</span>
      </div>
      <Link
        className="my-quizzes-info_container_info-container-link btn"
        href={`/quiz/${params.category}/${params.difficulty}`}
      >
        Continue
      </Link>
    </>
  );
};

export default ContinueElement;

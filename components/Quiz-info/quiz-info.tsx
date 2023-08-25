import { FC } from "react";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";
import StatusElement from "./quiz-info-status";
import InfoContainer from "./quiz-info-container";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}
const QuizInfo: FC<ParamsSlug> = ({ params }) => {
  return (
    <section
      className="my-quizzes-info"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(245, 246, 252, 0.73)),url(/mini-${params.category}.jpg)`,
      }}
    >
      <div className="my-quizzes-info_container">
        <div className="my-quizzes-info_container-filler"></div>
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
        />

        <Link href="/my-quizzies" className="my-quizzes-info_container-link">
          <HiArrowSmLeft />
        </Link>
      </div>
    </section>
  );
};

export default QuizInfo;

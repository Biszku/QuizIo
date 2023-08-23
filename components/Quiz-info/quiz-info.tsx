import { FC } from "react";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

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
        <span>{`${params.category}`}</span>
        <span>{`${params.difficulty}`}</span>
        <Link href="/my-quizzies" className="my-quizzes-info_container-link">
          <HiArrowSmLeft />
        </Link>
      </div>
    </section>
  );
};

export default QuizInfo;

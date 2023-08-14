import Link from "next/link";
import { FC } from "react";
import { HiChevronRight } from "react-icons/hi";
import GetQuzzies from "@/utils/getQuzzies";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}

const QuizPrevie: FC<ParamsSlug> = async ({ params }) => {
  const { category, difficulty } = params;
  const numOfQuestions = await GetQuzzies(category, difficulty);
  let timeToAnswer = 0;
  switch (params.difficulty) {
    case "easy":
      timeToAnswer = 30;
      break;
    case "medium":
      timeToAnswer = 45;
      break;
    case "hard":
      timeToAnswer = 60;
      break;
  }
  return (
    <section
      className="quiz-previe-container"
      style={{
        backgroundImage: ` linear-gradient(to right bottom, rgba(200, 200, 200, .3), rgba(200, 200, 200, .4)),url(/${params.category}.jpg)`,
      }}
    >
      {/* <Image
        src={`/${params.category}.jpg`}
        width={300}
        height={400}
        className="quiz-previe-container-background"
        alt={params.category}
      ></Image> */}
      <div className="quiz-previe-container_content">
        <p className="quiz-previe-container_content-category">
          {params.category}
        </p>
        <ul className="quiz-previe-container_content-list">
          <li className="quiz-previe-container_content-list-item">
            <HiChevronRight className="quiz-previe-container_content-list-item-icon" />
            <span className="quiz-previe-container_content-list-item-prop">
              Difficulty:
            </span>
            <span className="quiz-previe-container_content-list-item-param">{`${params.difficulty}`}</span>
          </li>
          <li className="quiz-previe-container_content-list-item">
            <HiChevronRight className="quiz-previe-container_content-list-item-icon" />

            <span className="quiz-previe-container_content-list-item-prop">
              Time to answer:
            </span>
            <span className="quiz-previe-container_content-list-item-param">{`${timeToAnswer} sec`}</span>
          </li>
          <li className="quiz-previe-container_content-list-item">
            <HiChevronRight className="quiz-previe-container_content-list-item-icon" />

            <span className="quiz-previe-container_content-list-item-prop">
              number of questions:
            </span>
            <span className="quiz-previe-container_content-list-item-param">
              {numOfQuestions.length === 0 ? "0" : numOfQuestions.length}
            </span>
          </li>
        </ul>
        <Link
          className="quiz-previe-container_content-button btn"
          href={`/quiz/${params.category}/${params.difficulty}`}
        >
          Start Quiz
        </Link>
      </div>
    </section>
  );
};

export default QuizPrevie;

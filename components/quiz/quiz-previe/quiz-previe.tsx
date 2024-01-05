import { FC } from "react";
import { HiChevronRight } from "react-icons/hi";
import GetQuzzies from "@/utils/getQuzzies";
import StartQuizButton from "./quiz-previe-button";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}

const QuizPrevie: FC<ParamsSlug> = async ({ params }) => {
  const { category, difficulty } = params;
  const questionsObj = await GetQuzzies({ category, difficulty });

  let timeToAnswer = 0;

  switch (params.difficulty) {
    case "easy":
      timeToAnswer = 10;
      break;
    case "medium":
      timeToAnswer = 15;
      break;
    case "hard":
      timeToAnswer = 20;
      break;
  }
  return (
    <>
      <section
        className="quiz-previe-container"
        style={{
          backgroundImage: ` linear-gradient(to right bottom, rgba(200, 200, 200, .3), rgba(200, 200, 200, .4)),url(/mini-${params.category}.jpg)`,
        }}
      >
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
                {questionsObj.length === 0 ? "0" : questionsObj.length}
              </span>
            </li>
          </ul>
          <StartQuizButton
            data={{
              category: params.category,
              difficulty: params.difficulty,
              questionsObj,
            }}
          />
        </div>
        <div className="quiz-previe-container--backdrop-filter"></div>
      </section>
    </>
  );
};

export default QuizPrevie;

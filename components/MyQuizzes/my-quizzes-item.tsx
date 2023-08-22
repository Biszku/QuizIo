import Link from "next/link";
import { FC } from "react";
import { HiFastForward, HiRefresh } from "react-icons/hi";
import { ImQuestion } from "react-icons/im";
import { useContext } from "react";
import { MainContext } from "../../context/context";

interface MyQuzziesProp {
  el: {
    category: string;
    difficulty: string;
    status: string;
    questions: any[];
    numOfQuestion: number;
    scoredPoints: number;
  };
  index: number;
}

const MyQuizzesItem: FC<MyQuzziesProp> = ({ el, index }) => {
  const { delQuiz } = useContext(MainContext);
  return (
    <div
      className="my-quizzes-container_item"
      style={{
        animationDelay: `${0.1 * index}s`,
      }}
    >
      <div
        className="my-quizzes-container_item_content"
        style={{
          backgroundImage: `url('/mini-${el.category}.jpg')`,
        }}
      >
        <div className="my-quizzes-container_item_content_container">
          <span className="my-quizzes-container_item_content_container-category">
            {el.category}
          </span>
          <span className="my-quizzes-container_item_content_container-difficulty">
            {el.difficulty}
          </span>
        </div>
      </div>
      <div className="my-quizzes-container_item_action-container">
        <Link
          href={`${
            el.status === "finished"
              ? `/my-quizzies`
              : `/quiz/${el.category}/${el.difficulty}`
          }`}
          className="my-quizzes-container_item_action-container-link"
          style={{
            backgroundColor: `${
              el.status === "finished" ? "#ff0000ba" : "#ff922bb3"
            }`,
          }}
          onClick={() =>
            el.status === "finished"
              ? delQuiz(el.category, el.difficulty)
              : null
          }
        >
          <span className="my-quizzes-container_item_action-container-link-text">
            {el.status === "finished" ? "Try Again" : "Continue"}
          </span>
          {el.status === "finished" ? (
            <HiRefresh className="my-quizzes-container_item_action-container-link-icon" />
          ) : (
            <HiFastForward className="my-quizzes-container_item_action-container-link-icon" />
          )}
        </Link>
      </div>
      <Link href={`/my-quizzies/quiz-info/${el.category}/${el.difficulty}`}>
        <ImQuestion className="my-quizzes-container_item-icon-link-to-info" />
      </Link>
    </div>
  );
};

export default MyQuizzesItem;

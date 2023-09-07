import Link from "next/link";
import { FC } from "react";
import { HiFastForward, HiRefresh } from "react-icons/hi";
import { ImQuestion } from "react-icons/im";
import { useContext } from "react";
import { MainContext } from "../../context/context";
import { motion } from "framer-motion";

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
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.3 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ type: "tween" }}
      className="my-quizzes-container_item"
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
          href={`/quiz/${el.category}/${el.difficulty}`}
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
    </motion.div>
  );
};

export default MyQuizzesItem;

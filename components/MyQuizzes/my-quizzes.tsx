"use client";
import { useContext } from "react";
import { MainContext } from "../../context/context";
import MyQuizzesItem from "./my-quizzes-item";
import { useState } from "react";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import { motion } from "framer-motion";

const MyQuizzesSection = () => {
  const [page, setPage] = useState(0);

  const { quizzes } = useContext(MainContext);

  const quizzesSplitInArray = [];
  for (let x = 0; x < quizzes.length; x += 6) {
    quizzesSplitInArray.push(quizzes.slice(x, x + 6));
  }

  return (
    <section className="my-quizzes-container">
      <motion.div
        className="my-quizzes-container_grid"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        initial="hidden"
        animate="visible"
      >
        {quizzes.length > 0 &&
          quizzesSplitInArray[page].map((el, index) => (
            <MyQuizzesItem key={el.questions[0].id} el={el} index={index} />
          ))}
      </motion.div>
      <div className="my-quizzes-container_pagination">
        <button
          className={`my-quizzes-container_pagination-decrease btn ${
            quizzesSplitInArray.length > 1 && page > 0 ? "btn--visible" : ""
          }`}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <HiArrowSmLeft className="my-quizzes-container_pagination-decrease-icon" />
        </button>

        {quizzesSplitInArray.length > 1 &&
          quizzesSplitInArray.map((el, index) => (
            <button
              className={`my-quizzes-container_pagination-basic btn ${
                page === index ? "active-page" : ""
              }`}
              onClick={() => setPage(index)}
              key={index}
            >
              {index + 1}
            </button>
          ))}

        <button
          className={`my-quizzes-container_pagination-increase btn ${
            quizzesSplitInArray.length > 1 &&
            page < quizzesSplitInArray.length - 1
              ? "btn--visible"
              : ""
          }`}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <HiArrowSmRight className="my-quizzes-container_pagination-increase-icon" />
        </button>
      </div>
      {quizzes.length === 0 && (
        <span className="my-quizzes-container-noQuizzes">
          You have no started or finished quizzes
        </span>
      )}
    </section>
  );
};

export default MyQuizzesSection;

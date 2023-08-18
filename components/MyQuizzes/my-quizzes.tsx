"use client";
import { useContext } from "react";
import { MainContext } from "../../context/context";
import MyQuizzesItem from "./my-quizzes-item";
import { useState } from "react";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

const MyQuizzesSection = () => {
  const [page, setPage] = useState(0);
  const { quizzes } = useContext(MainContext);
  const quizzesSplitInArray = [];
  for (let x = 0; x < quizzes.length; x += 6) {
    quizzesSplitInArray.push(quizzes.slice(x, x + 6));
  }
  // console.log(page);
  return (
    <div className="my-quizzes-container">
      <div className="my-quizzes-container_grid">
        {quizzes.length > 0 &&
          quizzesSplitInArray[page].map((el, index) => (
            <MyQuizzesItem key={index} el={el} index={index} />
          ))}
      </div>
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
      <span className="my-quizzes-container-noQuizzes">
        You have no started or finished quizzes
      </span>
    </div>
  );
};

export default MyQuizzesSection;

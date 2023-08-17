"use client";
import { useContext } from "react";
import { MainContext } from "../../context/context";
import Link from "next/link";

const MyQuizzesSection = () => {
  const { quizzes } = useContext(MainContext);
  return (
    <div className="">
      {quizzes.map((el, index) => (
        <div key={index} className="">
          <p>{el.category}</p>
          <p>{el.difficulty}</p>
          <Link
            href={`${
              el.status === "finished"
                ? `/my-quizzies`
                : `/quiz/${el.category}/${el.difficulty}`
            }`}
          >
            <p>{el.status}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyQuizzesSection;

"use client";
import { useContext } from "react";
import { MainContext } from "../../context/context";

const MyQuizzesSection = () => {
  const { quizzes } = useContext(MainContext);
  console.log(quizzes);
  return (
    <div className="">
      <h1>Elon</h1>
    </div>
  );
};

export default MyQuizzesSection;

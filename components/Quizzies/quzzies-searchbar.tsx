"use client";

import { useEffect, useState } from "react";
import useGetQuzzies from "@/hooks/useGetQuzzies";

const QuizziesSearchBar = () => {
  const arrOfDifficulty = ["easy", "medium", "hard"];
  const [categoryOfQuiz, setCategoryOfQuiz] = useState<string>("");

  useEffect(() => {
    if (categoryOfQuiz !== "") {
      console.log(useGetQuzzies(categoryOfQuiz, arrOfDifficulty));
    }
  }, [categoryOfQuiz]);

  return (
    <input
      className="general-container-input input"
      type="text"
      placeholder="Enter category of quiz"
      onChange={(e) => setCategoryOfQuiz(e.target.value.trim())}
    />
  );
};
export default QuizziesSearchBar;

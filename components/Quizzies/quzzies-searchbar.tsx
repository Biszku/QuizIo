"use client";

import GetQuzzies from "../../utils/getQuzzies";
import { useEffect, useState } from "react";

const QuizziesSearchBar = () => {
  const arrOfDifficulty = ["easy", "medium", "hard"];
  const [categoryOfQuiz, setCategoryOfQuiz] = useState<string>("");

  useEffect(() => {
    if (categoryOfQuiz !== "") {
      const getQuiz = async () => {
        const data = await GetQuzzies(categoryOfQuiz);
        console.log(data);
      };
      getQuiz();
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

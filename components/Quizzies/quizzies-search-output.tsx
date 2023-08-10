"use client";
import QuizziesSelectingCategory from "./quzzies-selecting-category";
import { useContext } from "react";
import { MainContext } from "../../context/context";

const QuizziesSearchOutput = () => {
  const arrOfCategories = [
    "linux",
    "devOps",
    "networking",
    "programming",
    "cloud",
    "docker",
    "kubernetes",
  ];
  const { visibilityOfCategoryList } = useContext(MainContext);
  return (
    <article className="general-container_search">
      <div className="general-container_selecting-container_loc">
        {arrOfCategories.map((category, index) => (
          <QuizziesSelectingCategory
            key={index}
            category={category}
            delay={index}
            visibility={visibilityOfCategoryList}
          />
        ))}
      </div>
    </article>
  );
};
export default QuizziesSearchOutput;

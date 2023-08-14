"use client";
import QuizziesSelectingCategory from "./quzzies-selecting-category";
import QuizziesSearchOutputItem from "./quizzies-search-output-item";
import { useContext } from "react";
import { MainContext } from "../../context/context";

const QuizziesSearchOutput = () => {
  const arrOfCategories = ["linux", "devOps", "sql", "code", "cms", "docker"];

  const { visibilityOfCategoryList, currentCategory } = useContext(MainContext);

  const dataToRenderQuizzies = [
    {
      id: "0",
      category: currentCategory,
      difficult: "easy",
    },
    {
      id: "1",
      category: currentCategory,
      difficult: "medium",
    },
    { id: "2", category: currentCategory, difficult: "hard" },
  ];

  return (
    <article className="general-container_search">
      {dataToRenderQuizzies[0].category[0] !== "" &&
        dataToRenderQuizzies.map((el) => (
          <QuizziesSearchOutputItem
            key={el.id}
            category={el.category[0]}
            difficult={el.difficult}
          />
        ))}

      <div
        className={`general-container_selecting-container_loc ${
          visibilityOfCategoryList === true ? "isVisibleContainer" : ""
        }`}
      >
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

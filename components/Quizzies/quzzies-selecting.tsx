"use client";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import QuizziesSelectingCategory from "./quzzies-selecting-category";

const QuizziesSelecting = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const arrOfCategories = [
    "linux",
    "devOps",
    "networking",
    "programming",
    "cloud",
    "docker",
    "kubernetes",
  ];
  return (
    <article className="general-container_selecting-container">
      <div className="general-container_selecting-container_select-bar">
        <span className="general-container_selecting-container_select-bar-select-text">
          Select Category Of Quiz
        </span>
        <input
          type="checkbox"
          id="showCategories"
          className="general-container_selecting-container_select-bar-checkbox"
        />
        <label
          htmlFor="showCategories"
          className="general-container_selecting-container_select-bar-label"
        >
          <HiChevronDown
            className="general-container_selecting-container_select-bar-show-icon"
            onClick={() => setVisible((prev) => !prev)}
          />
        </label>
      </div>
      <div className="general-container_selecting-container_loc">
        {arrOfCategories.map((category, index) => (
          <QuizziesSelectingCategory
            key={index}
            category={category}
            delay={index}
            visibility={visible}
          />
        ))}
      </div>
    </article>
  );
};
export default QuizziesSelecting;

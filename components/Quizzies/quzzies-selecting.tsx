"use client";
import { HiChevronDown } from "react-icons/hi";
import { useContext } from "react";
import { MainContext } from "../../context/context";

const QuizziesSelecting = () => {
  const { changeVisibility, visibilityOfCategoryList } =
    useContext(MainContext);

  return (
    <article className="general-container_selecting-container">
      <div className="general-container_selecting-container_select-bar">
        <label
          className="general-container_selecting-container_select-bar-select-text"
          style={{
            userSelect: "none",
          }}
          onClick={() => {
            changeVisibility();
          }}
        >
          Select Category Of Quiz
        </label>

        <label className="general-container_selecting-container_select-bar-label">
          <HiChevronDown
            className={`general-container_selecting-container_select-bar-show-icon ${
              visibilityOfCategoryList ? "" : "activeList"
            }`}
            onClick={() => {
              changeVisibility();
            }}
          />
        </label>
      </div>
    </article>
  );
};
export default QuizziesSelecting;

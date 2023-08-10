"use client";
import { HiChevronDown } from "react-icons/hi";
import { useContext, useRef } from "react";
import { MainContext } from "../../context/context";

const QuizziesSelecting = () => {
  const { changeVisibility, checkboxRef } = useContext(MainContext);

  return (
    <article className="general-container_selecting-container">
      <div className="general-container_selecting-container_select-bar">
        <span className="general-container_selecting-container_select-bar-select-text">
          Select Category Of Quiz
        </span>
        <input
          type="checkbox"
          ref={checkboxRef}
          id="showCategories"
          className="general-container_selecting-container_select-bar-checkbox"
        />
        <label
          htmlFor="showCategories"
          className="general-container_selecting-container_select-bar-label"
        >
          <HiChevronDown
            className="general-container_selecting-container_select-bar-show-icon"
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

"use client";
import { HiChevronDown } from "react-icons/hi";
import { useContext } from "react";
import { MainContext } from "../../context/context";

const QuizziesSelecting = () => {
  const { changeVisibility, checkboxRef } = useContext(MainContext);

  return (
    <article className="general-container_selecting-container">
      <div className="general-container_selecting-container_select-bar">
        <label
          htmlFor="showCategories"
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

"use client";
import { HiChevronDown } from "react-icons/hi";
import { useContext, useEffect, useRef } from "react";
import { MainContext } from "../../context/context";

const QuizziesSelecting = () => {
  const { changeVisibility, visibilityOfCategoryList } =
    useContext(MainContext);
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (visibilityOfCategoryList === false) {
      if (checkboxRef.current !== null) checkboxRef.current.checked = false;
    }
  }, [visibilityOfCategoryList]);

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

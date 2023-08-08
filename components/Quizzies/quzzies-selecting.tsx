"use client";

import GetQuzzies from "../../utils/getQuzzies";
import { HiChevronDown } from "react-icons/hi";

const QuizziesSelecting = () => {
  return (
    <div className="general-container_selecting-container">
      <span className="general-container_selecting-container-select-text">
        Select Category Of Quiz
      </span>
      <input
        type="checkbox"
        id="showCategories"
        className="general-container_selecting-container-checkbox"
      />
      <label
        htmlFor="showCategories"
        className="general-container_selecting-container-label"
      >
        <HiChevronDown className="general-container_selecting-container-show-icon" />
      </label>
    </div>
  );
};
export default QuizziesSelecting;

"use client";
import { useContext } from "react";
import { MainContext } from "../../context/context";

const QuizziesSelectingCategory = ({
  category,
  delay,
  visibility,
}: {
  category: string;
  delay: number;
  visibility: boolean;
}) => {
  const { changeVisibility, checkboxRef, setCurCat } = useContext(MainContext);

  return (
    <div
      className={`general-container_selecting-container_loc-item ${
        visibility ? "isVisible" : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(255, 146, 43, 0.73)),url(/mini-${category}.jpg)`,
        animationDelay: `${0.05 * delay}s`,
      }}
      onClick={() => {
        checkboxRef.current.checked = false;
        setCurCat(category);
        changeVisibility();
      }}
    >
      <span className="general-container_selecting-container_loc-item-category">{`${category}`}</span>
    </div>
  );
};

export default QuizziesSelectingCategory;

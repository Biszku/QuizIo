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
  const { changeVisibility, setCurCat } = useContext(MainContext);

  return (
    <div
      className={`general-container_selecting-container_loc-item ${
        visibility ? "isVisible" : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(#3b3b3b9c,#bfbfbfb8, #3b3b3b9c),url(/mini-${category}.jpg)`,
        animationDelay: `${0.05 * delay}s`,
      }}
      onClick={() => {
        setCurCat(category);
        changeVisibility();
      }}
    >
      <span className="general-container_selecting-container_loc-item-category">{`${category}`}</span>
    </div>
  );
};

export default QuizziesSelectingCategory;

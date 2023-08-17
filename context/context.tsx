"use client";
import React, { createContext, useState, FC, useRef } from "react";

interface MainContextData {
  quizzes:
    | {
        category: string;
        difficulty: string;
        status: string;
        questions?: any[];
      }[]
    | [];
  checkboxRef: any;
  currentCategory: string[];
  visibilityOfCategoryList: boolean;
  setCurCat: (category: string) => void;
  changeVisibility: () => void;
  addQuiz: (quiz: {
    category: string;
    difficulty: string;
    status: string;
    questions?: any[];
  }) => void;
}

export const MainContext = createContext<MainContextData>({
  quizzes: [],
  checkboxRef: null,
  currentCategory: [""],
  visibilityOfCategoryList: false,
  setCurCat: () => {},
  changeVisibility: () => {},
  addQuiz: () => {},
});

const MainContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quizzes, setQuizzes] = useState<
    {
      category: string;
      difficulty: string;
      status: string;
      questions?: any[];
    }[]
  >([]);
  const [visibilityOfCategoryList, setVisibilityOfCategoryList] =
    useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string[]>([""]);

  const setCurCat = (category: string) => setCurrentCategory([category]);

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const changeVisibility = () => setVisibilityOfCategoryList((prev) => !prev);

  const addQuiz = (quiz: {
    category: string;
    difficulty: string;
    status: string;
    questions?: any[];
  }) =>
    setQuizzes((prev) => {
      if (
        prev.find(
          (el) =>
            el.category === quiz.category && el.difficulty === quiz.difficulty
        )
      ) {
        return prev.map((quizEl) =>
          quizEl.category === quiz.category &&
          quizEl.difficulty === quiz.difficulty
            ? quiz
            : quizEl
        );
      }
      return [quiz, ...prev];
    });

  return (
    <MainContext.Provider
      value={{
        quizzes,
        currentCategory,
        setCurCat,
        checkboxRef,
        visibilityOfCategoryList,
        changeVisibility,
        addQuiz,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

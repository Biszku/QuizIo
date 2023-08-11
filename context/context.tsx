"use client";
import React, { createContext, useState, FC, useRef } from "react";

interface MainContextData {
  quiz: object;
  checkboxRef: any;
  currentCategory: string[];
  setCurCat: (category: string) => void;
  visibilityOfCategoryList: boolean;
  addQuiz: (quiz: object) => void;
  deleteQuiz: () => void;
  changeVisibility: () => void;
}

export const MainContext = createContext<MainContextData>({
  quiz: {},
  checkboxRef: null,
  currentCategory: [""],
  visibilityOfCategoryList: false,
  setCurCat: () => {},
  changeVisibility: () => {},
  addQuiz: () => {},
  deleteQuiz: () => {},
});

const MainContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quiz, setQuiz] = useState<object>({});
  const [visibilityOfCategoryList, setVisibilityOfCategoryList] =
    useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string[]>([""]);

  const setCurCat = (category: string) => setCurrentCategory([category]);

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const changeVisibility = () => setVisibilityOfCategoryList((prev) => !prev);

  const addQuiz = (quiz: object) => setQuiz(quiz);

  const deleteQuiz = () => setQuiz({});

  return (
    <MainContext.Provider
      value={{
        quiz,
        currentCategory,
        setCurCat,
        checkboxRef,
        visibilityOfCategoryList,
        changeVisibility,
        addQuiz,
        deleteQuiz,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

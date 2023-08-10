"use client";
import React, { createContext, useState, FC } from "react";

interface MainContextData {
  quiz: object;
  visibilityOfCategoryList: boolean;
  addQuiz: (quiz: object) => void;
  deleteQuiz: () => void;
  changeVisibility: () => void;
}

export const MainContext = createContext<MainContextData>({
  quiz: {},
  visibilityOfCategoryList: false,
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
  console.log(visibilityOfCategoryList);

  const changeVisibility = () => setVisibilityOfCategoryList((prev) => !prev);

  const addQuiz = (quiz: object) => setQuiz(quiz);

  const deleteQuiz = () => setQuiz({});

  return (
    <MainContext.Provider
      value={{
        quiz,
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

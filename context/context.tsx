"use client";
import React, { createContext, useState, FC } from "react";

interface MainContextData {
  quiz: object;
  addQuiz: (quiz: object) => void;
  deleteQuiz: () => void;
}

export const MainContext = createContext<MainContextData>({
  quiz: {},
  addQuiz: () => {},
  deleteQuiz: () => {},
});

const MainContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quiz, setQuiz] = useState<object>({});

  const addQuiz = (quiz: object) => setQuiz(quiz);

  const deleteQuiz = () => setQuiz({});

  return (
    <MainContext.Provider value={{ quiz, addQuiz, deleteQuiz }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

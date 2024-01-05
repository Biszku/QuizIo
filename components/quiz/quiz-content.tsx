"use client";
import { FC, useEffect, useState } from "react";
import SingleQuiz from "./quiz-single";

interface parametersProps {
  parameters: {
    quiz: string[];
  };
}

const QuizContent: FC<parametersProps> = ({ parameters }) => {
  const [timeToAnswer, setTimeToAnswer] = useState(0);
  const [category, difficult] = parameters.quiz;

  useEffect(() => {
    switch (difficult) {
      case "easy":
        setTimeToAnswer(10);
        break;
      case "medium":
        setTimeToAnswer(15);
        break;
      case "hard":
        setTimeToAnswer(20);
        break;
    }
  }, []);

  return (
    <section className="quiz_container">
      {timeToAnswer > 0 && (
        <SingleQuiz
          params={{ category, difficult }}
          timeToAnswer={timeToAnswer}
        />
      )}
    </section>
  );
};

export default QuizContent;

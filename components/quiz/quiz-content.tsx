"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SingleQuiz from "./quiz-single";

const QuizContent = () => {
  const pathname = usePathname();
  const quizInfo = pathname.split("/").slice(2);

  const [timeToAnswer, setTimeToAnswer] = useState(0);
  const [category, difficult] = quizInfo;

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

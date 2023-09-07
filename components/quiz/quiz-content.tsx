"use client";
import { FC, useEffect, useState } from "react";
import SingleQuiz from "./quiz-single";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface parametersProps {
  parameters: {
    quiz: string[];
  };
}

const QuizContent: FC<parametersProps> = ({ parameters }) => {
  const queryClient = new QueryClient();
  const [timeToAnswer, setTimeToAnswer] = useState(0);
  const [category, difficult] = parameters.quiz;

  // let timeToAnswer = 0;
  useEffect(() => {
    switch (difficult) {
      case "easy":
        // timeToAnswer = 10;
        setTimeToAnswer(10);
        break;
      case "medium":
        // timeToAnswer = 15;
        setTimeToAnswer(15);

        break;
      case "hard":
        // timeToAnswer = 20;
        setTimeToAnswer(20);

        break;
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <section className="quiz_container">
        {timeToAnswer > 0 && (
          <SingleQuiz
            params={{ category, difficult }}
            timeToAnswer={timeToAnswer}
          />
        )}
      </section>
    </QueryClientProvider>
  );
};

export default QuizContent;

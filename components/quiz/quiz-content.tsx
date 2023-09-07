import { FC } from "react";
import SingleQuiz from "./quiz-single";

interface parametersProps {
  parameters: {
    quiz: string[];
  };
}

const QuizContent: FC<parametersProps> = async ({ parameters }) => {
  const [category, difficult] = parameters.quiz;

  let timeToAnswer = 0;
  switch (difficult) {
    case "easy":
      timeToAnswer = 10;
      break;
    case "medium":
      timeToAnswer = 15;
      break;
    case "hard":
      timeToAnswer = 20;
      break;
  }

  return (
    <section className="quiz_container">
      <SingleQuiz
        params={{ category, difficult }}
        timeToAnswer={timeToAnswer}
      />
    </section>
  );
};

export default QuizContent;

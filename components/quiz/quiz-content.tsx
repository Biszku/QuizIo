import GetQuzzies from "../../utils/getQuzzies";
import { FC } from "react";
import SingleQuiz from "./quiz-single";

interface parametersProps {
  parameters: {
    quiz: string[];
  };
}

const QuizContent: FC<parametersProps> = async ({ parameters }) => {
  const [category, difficult] = parameters.quiz;
  const quiz = await GetQuzzies(category, difficult);

  let timeToAnswer = 0;
  switch (difficult) {
    case "easy":
      timeToAnswer = 30;
      break;
    case "medium":
      timeToAnswer = 45;
      break;
    case "hard":
      timeToAnswer = 60;
      break;
  }

  return (
    <section className="quiz_container">
      <SingleQuiz
        arrOfQuizzies={quiz}
        info={{ category, difficult }}
        timeToAnswer={timeToAnswer}
      />
    </section>
  );
};

export default QuizContent;

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
  return (
    <section className="quiz_container">
      <SingleQuiz arrOfQuizzies={quiz} />
    </section>
  );
};

export default QuizContent;

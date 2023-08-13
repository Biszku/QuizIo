import GetQuzzies from "../../utils/getQuzzies";
import { FC } from "react";

interface parametersProps {
  parameters: {
    quiz: string[];
  };
}

const QuizContent: FC<parametersProps> = async ({ parameters }) => {
  const [category, difficult] = parameters.quiz;
  const quiz = await GetQuzzies(category, difficult);
  
  console.log(1, quiz);
  return (
    <section className="quiz_container">
      {quiz.map((el: any) => {
        return <div className="quiz_container_single-quiz">{el.id}</div>;
      })}
    </section>
  );
};

export default QuizContent;

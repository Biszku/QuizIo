import { FC } from "react";

interface dataProps {
  data: any[];
}

const QuizContent: FC<dataProps> = ({ data }) => {
  console.log(data);
  return (
    <section className="quiz_container">
      {data.map((el) => {
        return <div className="quiz_container_single-quiz"></div>;
      })}
    </section>
  );
};

export default QuizContent;

import { FC, useEffect, useState } from "react";

interface QuizSummaryProps {
  points: number;
  quizzies: any;
  animation?: string;
}

const QuizSummary: FC<QuizSummaryProps> = ({
  points,
  quizzies,
  animation = "false",
}) => {
  const [curPoints, setCurPoints] = useState(0);

  console.log(points, quizzies);

  useEffect(() => {
    if (animation === "true") {
      const PointAdded = setInterval(() => {
        if (curPoints < points) {
          setCurPoints((prev) => prev + 1);
        }
      }, 100);
      return () => clearInterval(PointAdded);
    } else {
      setCurPoints(points);
    }
  }, [curPoints]);

  return (
    <>
      <article className="quiz_container_quiz-summary">
        <span>
          {curPoints}/{quizzies.length}
        </span>
      </article>
      <div className="quiz_container_quiz-summary--backdrop-filter"></div>
    </>
  );
};

export default QuizSummary;

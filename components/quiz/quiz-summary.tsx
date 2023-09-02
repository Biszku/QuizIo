import { FC, useEffect, useState } from "react";
import { ImStopwatch } from "react-icons/im";

interface QuizSummaryProps {
  quizziesInfo: {
    category: string;
    difficulty: string;
    status: string;
    questions: any[];
    numOfQuestion: number;
    scoredPoints: number;
  };
  animation?: string;
}

const QuizSummary: FC<QuizSummaryProps> = ({
  quizziesInfo,
  animation = "false",
}) => {
  const [curPoints, setCurPoints] = useState(0);
  const [timeToAnswer, setTimeToAnswer] = useState(0);

  useEffect(() => {
    switch (quizziesInfo.difficulty) {
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

    if (animation === "true") {
      const PointAdded = setInterval(() => {
        if (curPoints < quizziesInfo.scoredPoints) {
          setCurPoints((prev) => prev + 1);
        }
      }, 100);
      return () => clearInterval(PointAdded);
    } else {
      setCurPoints(quizziesInfo.scoredPoints);
    }
  }, [curPoints]);

  const avg_time =
    quizziesInfo.questions.reduce((sum, cur) => {
      return sum + cur.yourAnswer?.answerTime;
    }, 0) / quizziesInfo.questions.length;

  return (
    <>
      <article className="quiz_container_quiz-summary">
        <span className="quiz_container_quiz-summary-points">
          {curPoints}/{quizziesInfo.questions.length}
        </span>
        <div className="quiz_container_quiz-summary_questions-container"></div>
        <div className="quiz_container_quiz-summary_avg-time-container">
          <ImStopwatch className="quiz_container_quiz-summary_avg-time-container-icon" />
          <div className="quiz_container_quiz-summary_avg-time-container_avg-time-line-container">
            <div
              className="quiz_container_quiz-summary_avg-time-container_avg-time-line-container-line"
              style={{
                width: `${(avg_time * 100) / timeToAnswer}%`,
                backgroundColor: `${
                  avg_time / timeToAnswer > 0.33
                    ? avg_time / timeToAnswer > 0.66
                      ? "red"
                      : "orange"
                    : "green"
                }`,
              }}
            ></div>
          </div>
          <span className="quiz_container_quiz-summary_avg-time-container-time-to-answer">
            <span className="quiz_container_quiz-summary_avg-time-container-time-to-answer-number">
              {`${timeToAnswer}`}
            </span>
            sec
          </span>
        </div>
      </article>
      <div className="quiz_container_quiz-summary--backdrop-filter"></div>
    </>
  );
};

export default QuizSummary;

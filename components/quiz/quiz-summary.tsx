"use client";
import { FC, useEffect, useState } from "react";
import { ImStopwatch } from "react-icons/im";
import { HiRefresh } from "react-icons/hi";
import { useContext } from "react";
import { MainContext } from "../../context/context";
import Link from "next/link";

interface QuizSummaryProps {
  quizziesInfo: {
    category: string;
    difficulty: string;
    status: string;
    questions: any[];
    numOfQuestion: number;
    scoredPoints: number;
  };
  addQuestion: (question: any) => void;
  animation?: string;
  activeQuestion: any[];
}

const QuizSummary: FC<QuizSummaryProps> = ({
  quizziesInfo,
  animation = "false",
  addQuestion,
  activeQuestion,
}) => {
  const [curPoints, setCurPoints] = useState(0);
  const [timeToAnswer, setTimeToAnswer] = useState(0);

  const { delQuiz } = useContext(MainContext);

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
    <article
      className="quiz_container_quiz-summary--backdrop-filter"
      style={{
        marginTop: `${
          activeQuestion.length > 0 || animation === "true" ? "1rem" : "0rem"
        }`,
      }}
    >
      <div className="quiz_container_quiz-summary">
        <span className="quiz_container_quiz-summary-points">
          {curPoints}/{quizziesInfo.questions.length}
        </span>
        <div className="quiz_container_quiz-summary_questions-container">
          {quizziesInfo.questions.map((el, index) => {
            return (
              <div
                key={el.id}
                onClick={() => addQuestion(el)}
                className="quiz_container_quiz-summary_questions-container_item"
                style={{
                  backgroundColor: `${
                    el.yourAnswer?.isTrue ? "#40c057" : "#fa5252"
                  }`,
                }}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
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
            >
              <span className="quiz_container_quiz-summary_avg-time-container_avg-time-line-container-line-text">
                {avg_time}
              </span>

              <span className="quiz_container_quiz-summary_avg-time-container_avg-time-line-container-line-avg">
                avg time
              </span>
            </div>
          </div>
          <span className="quiz_container_quiz-summary_avg-time-container-time-to-answer">
            <span className="quiz_container_quiz-summary_avg-time-container-time-to-answer-number">
              {`${timeToAnswer}`}
            </span>
            sec
          </span>
        </div>
        <Link
          href={`${
            animation === `false`
              ? `/quiz/${quizziesInfo.category}/${quizziesInfo.difficulty}`
              : `/`
          }`}
          className="quiz_container_quiz-summary-btn btn"
          onClick={() => {
            if (animation === "false")
              delQuiz(quizziesInfo.category, quizziesInfo.difficulty);
          }}
        >
          {animation === "false" ? (
            <>
              Try Again
              <HiRefresh />
            </>
          ) : (
            `Finish`
          )}
        </Link>
      </div>
    </article>
  );
};

export default QuizSummary;

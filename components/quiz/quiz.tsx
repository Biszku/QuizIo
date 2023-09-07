import { FC } from "react";
import React from "react";

interface ArrOfQuizziesProp {
  quizzies: any[];
  numOfcurQuiz: number;
  timers?: {
    timeToAnswer: number;
    timeToAnswerState: number;
  };
  arrOfAnswers: {
    answer: string;
    value: string;
  }[];
  chooseAnswer?: (answer: any) => void;
  summary?: boolean;
  corAnswer?: string[];
}

const Quiz: FC<ArrOfQuizziesProp> = ({
  quizzies,
  numOfcurQuiz,
  timers = {
    timeToAnswer: 0,
    timeToAnswerState: 0,
  },
  chooseAnswer,
  arrOfAnswers,
  summary = false,
  corAnswer,
}) => {
  const { answer: yourAnswer, isTrue } =
    summary && quizzies[numOfcurQuiz].yourAnswer;
  const { timeToAnswer, timeToAnswerState } = timers;
  return (
    <div className="quiz_container-center">
      <article
        key={quizzies[numOfcurQuiz].id}
        className="quiz_container_single-quiz"
      >
        {!summary && (
          <div
            className="timer-background"
            style={{
              width: `${(timeToAnswerState * 100) / timeToAnswer}%`,
              background: `${
                (timeToAnswerState * 100) / timeToAnswer > 33
                  ? (timeToAnswerState * 100) / timeToAnswer > 66
                    ? "green"
                    : "orange"
                  : "red"
              }`,
            }}
          ></div>
        )}
        <div className="quiz_container_single-quiz_info-box">
          <span>
            {numOfcurQuiz + 1} / {quizzies.length}
          </span>
        </div>
        <div className="quiz_container_single-quiz_question-box">
          <span
            className="quiz_container_single-quiz_question-box--question"
            style={{
              fontSize:
                quizzies[numOfcurQuiz].question.length > 100
                  ? "0.9rem"
                  : "1rem",
            }}
          >
            {quizzies[numOfcurQuiz].question}
          </span>
        </div>
        <div className="quiz_container_single-quiz_answers-box">
          {arrOfAnswers
            .filter((el) => el.value !== null)
            .map((el, index, curArray) => {
              const correctAnswer = corAnswer && corAnswer.includes(el.answer);
              return (
                <button
                  key={index}
                  className="quiz_container_single-quiz_answers-box-btn btn"
                  onClick={() =>
                    !summary && chooseAnswer && chooseAnswer(el.answer)
                  }
                  style={{
                    fontSize:
                      curArray.find((el) => el.value.length > 50) ||
                      curArray.length > 5
                        ? "0.72rem"
                        : "0.8rem",

                    border:
                      summary && correctAnswer
                        ? "0.13rem solid rgb(0 201 10)"
                        : yourAnswer === el.answer && !isTrue
                        ? "0.13rem solid #ff2828"
                        : "none",

                    backgroundImage:
                      summary && correctAnswer
                        ? "linear-gradient(rgb(82 255 122), rgb(27 219 28))"
                        : yourAnswer === el.answer && !isTrue
                        ? "linear-gradient(#ff8d8d, #ff5454)"
                        : "linear-gradient(#ff922b, #ff8d21)",

                    cursor: summary ? "default" : "pointer",
                  }}
                >
                  {el.value}
                </button>
              );
            })}

          <button
            className="quiz_container_single-quiz_answers-box-btn btn"
            onClick={() => !summary && chooseAnswer && chooseAnswer("none")}
            style={{
              cursor: summary ? "default" : "pointer",
              border:
                summary && corAnswer?.length === 0
                  ? "0.13rem solid rgb(0 201 10)"
                  : yourAnswer === "none" && !isTrue
                  ? "0.13rem solid #ff2828"
                  : "none",

              backgroundImage:
                summary && corAnswer?.length === 0
                  ? "linear-gradient(rgb(82 255 122), rgb(27 219 28))"
                  : yourAnswer === "none" && !isTrue
                  ? "linear-gradient(#ff8d8d, #ff5454)"
                  : "linear-gradient(#ff922b, #ff8d21)",
            }}
          >
            none
          </button>
        </div>
      </article>
    </div>
  );
};

export default React.memo(Quiz);

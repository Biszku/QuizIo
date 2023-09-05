import { FC } from "react";

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
}) => {
  const { timeToAnswer, timeToAnswerState } = timers;
  return (
    <article
      key={quizzies[numOfcurQuiz].id}
      className="quiz_container_single-quiz"
    >
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
                ? "0.8rem"
                : "0.9rem",
          }}
        >
          {quizzies[numOfcurQuiz].question}
        </span>
      </div>
      <div className="quiz_container_single-quiz_answers-box">
        {arrOfAnswers
          .filter((el) => el.value !== null)
          .map((el, index, curArray) => {
            return (
              <button
                key={index}
                className="quiz_container_single-quiz_answers-box-btn btn"
                onClick={() => chooseAnswer && chooseAnswer(el.answer)}
                style={{
                  fontSize:
                    curArray.find((el) => el.value.length > 50) ||
                    curArray.length > 5
                      ? "0.7rem"
                      : "0.8rem",
                }}
              >
                {el.value}
              </button>
            );
          })}

        <button
          className="quiz_container_single-quiz_answers-box-btn btn"
          onClick={() => chooseAnswer && chooseAnswer("none")}
        >
          none
        </button>
      </div>
    </article>
  );
};

export default Quiz;

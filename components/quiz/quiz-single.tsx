"use client";
import { useState, FC, useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../../context/context";

interface ArrOfQuizziesProp {
  arrOfQuizzies: any[];
  timeToAnswer: number;
  info: {
    category: string;
    difficult: string;
  };
}

const SingleQuiz: FC<ArrOfQuizziesProp> = ({
  arrOfQuizzies,
  info,
  timeToAnswer,
}) => {
  const { addQuiz, quizzes } = useContext(MainContext);

  const HistoryQuiz = quizzes.find(
    (el) => el.category === info.category && el.difficulty === info.difficult
  );

  const quizziesState = HistoryQuiz ? HistoryQuiz?.questions : arrOfQuizzies;
  const numOfcurQuizState = HistoryQuiz ? HistoryQuiz?.numOfQuestion : 0;
  const gameInfoState = HistoryQuiz
    ? {
        points: HistoryQuiz?.scoredPoints,
      }
    : {
        points: 0,
      };

  const [timeToAnswerState, setTimeToAnswerState] = useState(timeToAnswer);
  const [quizzies, setQuizzies] = useState(quizziesState);
  const [numOfcurQuiz, setNumOfcurQuiz] = useState(numOfcurQuizState);
  const [gameInfo, setGameInfo] = useState(gameInfoState);

  const arrOfAnswers = [];
  const correctAnswer: any[] = [];

  for (const aliasToAnswer in quizzies[numOfcurQuiz]?.answers) {
    arrOfAnswers.push({
      answer: aliasToAnswer,
      value: quizzies[numOfcurQuiz]?.answers[aliasToAnswer],
    });
  }

  for (const answerObj in quizzies[numOfcurQuiz]?.correct_answers) {
    if (quizzies[numOfcurQuiz].correct_answers[answerObj] === "true")
      correctAnswer.push(answerObj.slice(0, 8));
  }

  const chooseAnswer = (answer: any) => {
    let IsTrueAnswer = false;
    if (
      (chooseAnswer.length === 0 && answer === "none") ||
      correctAnswer.includes(answer)
    ) {
      setGameInfo((prev) => ({ ...prev, points: prev.points + 1 }));
      IsTrueAnswer = true;
    }

    setQuizzies((prev) =>
      prev.map((el, index) => {
        if (index === numOfcurQuiz)
          return {
            ...el,
            yourAnswer: {
              answer: answer,
              isTrue: IsTrueAnswer,
              answerTime: timeToAnswer - timeToAnswerState,
            },
          };

        return el;
      })
    );
    setNumOfcurQuiz((prev) => prev + 1);
    setTimeToAnswerState(timeToAnswer);
  };

  useEffect(() => {
    const timer = setInterval(
      () => setTimeToAnswerState((prev) => prev - 1),
      1000
    );

    if (numOfcurQuiz === quizzies.length) clearInterval(timer);
    // if (firstLoad === false) {
    addQuiz({
      category: info.category,
      difficulty: info.difficult,
      questions: quizzies,
      numOfQuestion: numOfcurQuiz,
      status: numOfcurQuiz === quizzies.length ? "finished" : "unfinished",
      scoredPoints: gameInfo.points,
    });
    // } else setFirstLoad(false);
    return () => clearInterval(timer);
  }, [numOfcurQuiz]);

  useEffect(() => {
    if (timeToAnswerState < 0) {
      setQuizzies((prev) =>
        prev.map((el, index) => {
          if (index === numOfcurQuiz)
            return {
              ...el,
              yourAnswer: {
                answer: null,
                isTrue: false,
                answerTime: timeToAnswer,
              },
            };

          return el;
        })
      );
      setNumOfcurQuiz((prev) => prev + 1);
      setTimeToAnswerState(timeToAnswer);
    }
  }, [timeToAnswerState]);

  // if (
  //   quizzes.find(
  //     (el) => el.category === info.category && el.difficulty === info.difficult
  //   )?.category !== undefined
  // ) {
  //   const quizFromHistory = quizzes.find(
  //     (el) => el.category === info.category && el.difficulty === info.difficult
  //   )?.questions;
  //   setQuizzies(quizFromHistory);
  // }

  return (
    <>
      {numOfcurQuiz < quizzies.length && (
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
            <span className="quiz_container_single-quiz_question-box--question">
              {quizzies[numOfcurQuiz].question}
            </span>
          </div>
          <div className="quiz_container_single-quiz_answers-box">
            {arrOfAnswers
              .filter((el) => el.value !== null)
              .map((el, index) => {
                return (
                  <div
                    key={index}
                    className="quiz_container_single-quiz_answers-box_answer"
                  >
                    <button
                      className="quiz_container_single-quiz_answers-box_answer-btn btn"
                      onClick={() => chooseAnswer(el.answer)}
                    >
                      {el.value}
                    </button>
                  </div>
                );
              })}
            <div className="quiz_container_single-quiz_answers-box_answer">
              <button
                className="quiz_container_single-quiz_answers-box_answer-btn btn"
                onClick={() => chooseAnswer("none")}
              >
                none
              </button>
            </div>
          </div>
        </article>
      )}
      {numOfcurQuiz === quizzies.length && (
        <article className="quiz_container_quiz-summary">
          <span>
            You scored {gameInfo.points}/{quizzies.length}
          </span>
        </article>
      )}
    </>
  );
};

export default SingleQuiz;

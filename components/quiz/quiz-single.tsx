"use client";
import { useState, FC } from "react";

interface ArrOfQuizziesProp {
  arrOfQuizzies: any[];
}

const SingleQuiz: FC<ArrOfQuizziesProp> = ({ arrOfQuizzies }) => {
  const [quizzies, setQuizzies] = useState(arrOfQuizzies);
  const [numOfcurQuiz, setNumOfcurQuiz] = useState(0);
  const [gameInfo, setGameInfo] = useState({
    points: 0,
  });
  const arrOfAnswers = [];
  const correctAnswer: any[] = [];

  const chooseAnswer = (answer: any) => {
    if (chooseAnswer.length === 0 && answer === "none")
      setGameInfo((prev) => ({ ...prev, points: prev.points + 1 }));
    if (correctAnswer.includes(answer))
      setGameInfo((prev) => ({ ...prev, points: prev.points + 1 }));

    setNumOfcurQuiz((prev) => prev + 1);
  };

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

  return (
    <>
      {numOfcurQuiz < 20 && (
        <article
          key={quizzies[numOfcurQuiz].id}
          className="quiz_container_single-quiz"
        >
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
      {numOfcurQuiz === 20 && (
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

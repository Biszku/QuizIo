"use client";
import { useState, FC } from "react";

interface ArrOfQuizziesProp {
  arrOfQuizzies: any[];
}

const SingleQuiz: FC<ArrOfQuizziesProp> = ({ arrOfQuizzies }) => {
  const [quizzies, setQuizzies] = useState<any[]>(arrOfQuizzies);
  const [numOfcurQuiz, setNumOfcurQuiz] = useState<any>(1);
  const arrOfAnswers: string[] = [];

  for (const aliasToAnswer in quizzies[numOfcurQuiz]?.answers) {
    arrOfAnswers.push(quizzies[numOfcurQuiz]?.answers[aliasToAnswer]);
  }

  return (
    <>
      {numOfcurQuiz < 20 && (
        <article
          key={quizzies[numOfcurQuiz].id}
          className="quiz_container_single-quiz"
        >
          <div className="quiz_container_single-quiz_question-box">
            <span className="quiz_container_single-quiz_question-box--question">
              {quizzies[numOfcurQuiz].question}
            </span>
          </div>
          <div className="quiz_container_single-quiz_answers-box">
            {arrOfAnswers
              .filter((val) => val !== null)
              .map((value, index) => {
                return (
                  <div
                    key={index}
                    className="quiz_container_single-quiz_answers-box_answer"
                  >
                    <button
                      className="btn"
                      onClick={() => setNumOfcurQuiz((prev: any) => prev + 1)}
                    >
                      {value}
                    </button>
                  </div>
                );
              })}
          </div>
          <span>-{quizzies[numOfcurQuiz].category}-</span>
        </article>
      )}
      {numOfcurQuiz === 20 && (
        <article className="quiz_container_quiz-summary">
          <span>Congratulation</span>
        </article>
      )}
    </>
  );
};

export default SingleQuiz;

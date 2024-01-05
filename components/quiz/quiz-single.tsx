"use client";
import { useState, FC, useEffect, useCallback, useContext } from "react";
import { MainContext } from "../../context/context";
import QuizSummary from "./quiz-summary";
import Quiz from "./quiz";
import getArrOfAnswers from "@/utils/getArrayOfAnswers";
import getCorrectAnswers from "@/utils/getCorrectAnswers";

interface ArrOfQuizziesProp {
  timeToAnswer: number;
  params: {
    category: string;
    difficult: string;
  };
}

const SingleQuiz: FC<ArrOfQuizziesProp> = ({ params, timeToAnswer }) => {
  const { addQuiz, quizzes } = useContext(MainContext);
  console.log(quizzes);

  const HistoryQuiz = quizzes.find(
    (el) =>
      el.category === params.category && el.difficulty === params.difficult
  );

  const quizziesState =
    HistoryQuiz && HistoryQuiz?.questions[0] !== undefined
      ? HistoryQuiz.questions
      : [undefined];

  const numOfcurQuizState = HistoryQuiz ? HistoryQuiz?.numOfQuestion : 0;
  const gameInfoState = HistoryQuiz
    ? {
        points: HistoryQuiz?.scoredPoints,
      }
    : {
        points: 0,
      };

  const [timeToAnswerState, setTimeToAnswerState] = useState(timeToAnswer);
  const [quizzies, setQuizzies] = useState<any[]>(quizziesState);
  const [numOfcurQuiz, setNumOfcurQuiz] = useState(numOfcurQuizState);
  const [gameInfo, setGameInfo] = useState(gameInfoState);
  const [summaryQuestionsPrevie, setSummaryQuestionsPrevie] = useState<any[]>(
    []
  );

  const correctAnswer = getCorrectAnswers(quizzies, numOfcurQuiz);

  useEffect(() => {
    const timer = setInterval(
      () => setTimeToAnswerState((prev) => prev - 1),
      1000
    );
    if (quizzies) {
      if (numOfcurQuiz === quizzies.length) clearInterval(timer);

      addQuiz({
        category: params.category,
        difficulty: params.difficult,
        questions: quizzies,
        numOfQuestion: numOfcurQuiz,
        status: numOfcurQuiz === quizzies.length ? "finished" : "unfinished",
        scoredPoints: gameInfo.points,
      });
    }
    return () => clearInterval(timer);
  }, [numOfcurQuiz, quizzies]);

  useEffect(() => {
    if (quizzies) {
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
    }
  }, [timeToAnswerState]);

  const chooseAnswer = useCallback(
    (answer: any) => {
      let IsTrueAnswer = false;
      if (
        (correctAnswer.length === 0 && answer === "none") ||
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
    },
    [correctAnswer]
  );

  return (
    <>
      {numOfcurQuiz < quizzies.length && quizzies[1] !== undefined && (
        <Quiz
          quizzies={quizzies}
          numOfcurQuiz={numOfcurQuiz}
          timers={{ timeToAnswer, timeToAnswerState }}
          chooseAnswer={chooseAnswer}
          arrOfAnswers={getArrOfAnswers(quizzies, numOfcurQuiz)}
        />
      )}
      {quizzies[1] !== undefined &&
        numOfcurQuiz === quizzies.length &&
        HistoryQuiz && (
          <>
            <QuizSummary
              addQuestion={setSummaryQuestionsPrevie}
              quizziesInfo={HistoryQuiz}
              animation="true"
            />

            {summaryQuestionsPrevie.map((el, index) => {
              return (
                <Quiz
                  key={index}
                  quizzies={HistoryQuiz.questions}
                  numOfcurQuiz={el}
                  arrOfAnswers={getArrOfAnswers(HistoryQuiz.questions, el)}
                  summary={true}
                  corAnswer={getCorrectAnswers(HistoryQuiz.questions, el)}
                />
              );
            })}
          </>
        )}
    </>
  );
};

export default SingleQuiz;

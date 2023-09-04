"use client";
import { useState, FC, useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../../context/context";
import QuizSummary from "./quiz-summary";
import Quiz from "./quiz";

interface ArrOfQuizziesProp {
  arrOfQuizzies: any[];
  timeToAnswer: number;
  params: {
    category: string;
    difficult: string;
  };
}

const SingleQuiz: FC<ArrOfQuizziesProp> = ({
  arrOfQuizzies,
  params,
  timeToAnswer,
}) => {
  const { addQuiz, quizzes } = useContext(MainContext);

  const HistoryQuiz = quizzes.find(
    (el) =>
      el.category === params.category && el.difficulty === params.difficult
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
  const [summaryQuestionsPrevie, setSummaryQuestionsPrevie] = useState<any[]>(
    []
  );

  const arrOfAnswers: { answer: string; value: string }[] = [];
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

    addQuiz({
      category: params.category,
      difficulty: params.difficult,
      questions: quizzies,
      numOfQuestion: numOfcurQuiz,
      status: numOfcurQuiz === quizzies.length ? "finished" : "unfinished",
      scoredPoints: gameInfo.points,
    });

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

  const addQuestionsPrevie = (question: any) => {
    setSummaryQuestionsPrevie((prev) => {
      if (prev.find((el) => el.id === question.id)) {
        return prev;
      }
      return [question, ...prev];
    });
  };

  return (
    <>
      {numOfcurQuiz < quizzies.length && (
        <Quiz
          quizzies={quizzies}
          numOfcurQuiz={numOfcurQuiz}
          timers={{ timeToAnswer, timeToAnswerState }}
          chooseAnswer={chooseAnswer}
          arrOfAnswers={arrOfAnswers}
        />
      )}
      {numOfcurQuiz === quizzies.length && HistoryQuiz && (
        <>
          <QuizSummary
            addQuestion={addQuestionsPrevie}
            quizziesInfo={HistoryQuiz}
            activeQuestion={summaryQuestionsPrevie}
            animation="true"
          />
          {summaryQuestionsPrevie.map((el, index) => {
            return <p key={index}>{index}</p>;
          })}
        </>
      )}
    </>
  );
};

export default SingleQuiz;

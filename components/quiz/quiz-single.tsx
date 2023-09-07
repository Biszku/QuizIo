"use client";
import { useState, FC, useEffect, useCallback, useContext } from "react";
import { MainContext } from "../../context/context";
import QuizSummary from "./quiz-summary";
import Quiz from "./quiz";
import GetQuzzies from "../../utils/getQuzzies";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/loading";

interface ArrOfQuizziesProp {
  timeToAnswer: number;
  params: {
    category: string;
    difficult: string;
  };
}

const SingleQuiz: FC<ArrOfQuizziesProp> = ({ params, timeToAnswer }) => {
  const { addQuiz, quizzes } = useContext(MainContext);

  const HistoryQuiz = quizzes.find(
    (el) =>
      el.category === params.category && el.difficulty === params.difficult
  );

  console.log(HistoryQuiz);

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

  const arrOfAnswers: { answer: string; value: string }[] = [];
  const correctAnswer: any[] = [];

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["quizzes"],
    queryFn: ({ signal }: any) =>
      GetQuzzies({
        category: params.category,
        difficulty: params.difficult,
        signal,
      }),
  });

  useEffect(() => {
    if (data && quizzies[0] === undefined) {
      setQuizzies(data);
    }
  }, [data]);

  if (quizzies) {
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
  }

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
      {isLoading && <Loading />}
      {numOfcurQuiz < quizzies.length && quizzies[1] !== undefined && (
        <Quiz
          quizzies={quizzies}
          numOfcurQuiz={numOfcurQuiz}
          timers={{ timeToAnswer, timeToAnswerState }}
          chooseAnswer={chooseAnswer}
          arrOfAnswers={arrOfAnswers}
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
              return <p key={index}>{index}</p>;
            })}
          </>
        )}
    </>
  );
};

export default SingleQuiz;

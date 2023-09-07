const getArrOfAnswers = (quiz: any[], numOfCurrentQuiz: number) => {
  const arrOfAnswers: { answer: string; value: string }[] = [];

  for (const aliasToAnswer in quiz[numOfCurrentQuiz]?.answers) {
    arrOfAnswers.push({
      answer: aliasToAnswer,
      value: quiz[numOfCurrentQuiz]?.answers[aliasToAnswer],
    });
  }

  return arrOfAnswers;
};

export default getArrOfAnswers;

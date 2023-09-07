const getCorrectAnswers = (quiz: any[], numOfCurQ: number) => {
  const correctAnswer: any[] = [];

  for (const answerObj in quiz[numOfCurQ]?.correct_answers) {
    if (quiz[numOfCurQ].correct_answers[answerObj] === "true") {
      correctAnswer.push(answerObj.slice(0, 8));
    }
  }

  return correctAnswer;
};
export default getCorrectAnswers;

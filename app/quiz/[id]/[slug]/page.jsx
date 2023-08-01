import QuizPrevie from "../../../../components/quiz/quiz-previe/quiz-previe";

function QuizUser({ params }) {
  console.log(params);
  return <QuizPrevie params={params} />;
}

export default QuizUser;

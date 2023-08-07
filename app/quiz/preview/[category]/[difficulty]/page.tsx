import QuizPrevie from "../../../../../components/quiz/quiz-previe/quiz-previe";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}

function QuizUser({ params }: ParamsSlug) {
  return <QuizPrevie params={params} />;
}

export default QuizUser;

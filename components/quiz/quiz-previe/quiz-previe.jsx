import Link from "next/link";

function QuizPrevie({ params }) {
  console.log(params);
  return (
    <section className="quiz-previe-container">
      <p>{`${params.id} ${params.slug}`}</p>
      <Link href={`/quiz/${params.id}/${params.slug}/1`}>Start Quiz</Link>
    </section>
  );
}

export default QuizPrevie;

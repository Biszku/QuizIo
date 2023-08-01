"use client";
import Link from "next/link";

function QuizPrevie({ params }) {
  console.log(params);
  return (
    <section className="quiz-previe-container">
      <p>{`${params.id} ${params.slug}`}</p>
      <Link href={`/quiz/${params.id}/${params.slug}/1`}>Start Quiz</Link>
      <style jsx>{`
        .quiz-previe-container {
          background-image: linear-gradient(
              to right bottom,
              rgba(78, 78, 78, 0.5),
              rgba(78, 78, 78, 0.6)
            ),
            url(/${params.id}.jpg);
        }
      `}</style>
    </section>
  );
}

export default QuizPrevie;

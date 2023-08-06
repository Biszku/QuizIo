import Link from "next/link";

interface ParamsSlug {
  params: {
    category: string;
    difficulty: string;
  };
}

function QuizPrevie({ params }: ParamsSlug) {
  return (
    <section
      className="quiz-previe-container"
      style={{
        backgroundImage: ` linear-gradient(to right bottom, rgba(200, 200, 200, .3), rgba(200, 200, 200, .4)), url(/${params.category}.jpg)`,
      }}
    >
      <div className="quiz-previe-container_content">
        <p>{params.category}</p>
        <ul>
          <li>{`Difficulty: ${params.difficulty}`}</li>
          <li>{`Time to answer: ${10} sec`}</li>
          <li>number of questions: 40</li>
        </ul>
        <Link href={`/quiz/${params.category}/${params.difficulty}/1`}>
          Start Quiz
        </Link>
      </div>
    </section>
  );
}

export default QuizPrevie;

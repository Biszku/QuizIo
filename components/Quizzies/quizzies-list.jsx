import Image from "next/image";

import Link from "next/link";

function QuizziesList() {
  const randomAsks = [];
  const getRandomQuiz = async (difficulty) => {
    const req = await fetch(
      `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}&limit=10&difficulty=${difficulty}`
    );
    const data = await req.json();
    randomAsks.push(data);
  };
  return (
    <article className="general-container_list-container">
      <ul className="general-container_list-container_list">
        <li className="general-container_list-container_list-item">
          <Link
            href="/quiz"
            className="general-container_list-container_list-item_link"
          >
            <span className="general-container_list-container_list-item_link-category">
              Random
            </span>
            <Image
              src="/random.jpg"
              width={400}
              height={400}
              alt="A lot of books and some pictures"
              className="general-container_list-container_list-item_link-background"
            />
            <span className="general-container_list-container_list-item_link-difficulty">
              Easy
            </span>
          </Link>
        </li>
        <li className="general-container_list-container_list-item">
          <Link
            href="/quiz"
            className="general-container_list-container_list-item_link"
          >
            <span className="general-container_list-container_list-item_link-category">
              Random
            </span>
            <Image
              src="/random.jpg"
              width={400}
              height={400}
              alt="A lot of books and some pictures"
              className="general-container_list-container_list-item_link-background"
            />
            <span className="general-container_list-container_list-item_link-difficulty">
              Medium
            </span>
          </Link>
        </li>
        <li className="general-container_list-container_list-item">
          <Link
            href="/quiz"
            className="general-container_list-container_list-item_link"
          >
            <span className="general-container_list-container_list-item_link-category">
              Random
            </span>
            <Image
              src="/random.jpg"
              width={400}
              height={400}
              alt="A lot of books and some pictures"
              className="general-container_list-container_list-item_link-background"
            />
            <span className="general-container_list-container_list-item_link-difficulty">
              Hard
            </span>
          </Link>
        </li>
      </ul>
    </article>
  );
}
export default QuizziesList;

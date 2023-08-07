import Link from "next/link";
import Image from "next/image";

interface PropsData {
  data: {
    category: string;
    difficulty: string;
  };
}

function QuizziesListItem({ data }: PropsData) {
  return (
    <li className="general-container_list-container_list-item">
      <Link
        href={`/quiz/previe/${data.category}/${data.difficulty}`}
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
          {data.difficulty}
        </span>
      </Link>
    </li>
  );
}

export default QuizziesListItem;

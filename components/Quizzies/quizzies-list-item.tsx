import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface PropsData {
  data: {
    category: string;
    difficulty: string;
  };
}

const QuizziesListItem: FC<PropsData> = ({ data }) => {
  return (
    <li className="general-container_list-container_list-item">
      <Link
        href={`/quiz/preview/${data.category}/${data.difficulty}`}
        className="general-container_list-container_list-item_link"
      >
        <span className="general-container_list-container_list-item_link-category">
          Random
        </span>
        {/* <Image
          src="/random.jpg"
          width={400}
          height={300}
          alt="A lot of books and some pictures"
          className="general-container_list-container_list-item_link-background"
        /> */}
        <div className="general-container_list-container_list-item_link-background"></div>
        <span className="general-container_list-container_list-item_link-difficulty">
          {data.difficulty}
        </span>
      </Link>
    </li>
  );
};

export default QuizziesListItem;

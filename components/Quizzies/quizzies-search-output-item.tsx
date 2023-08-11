import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
interface DataFromProps {
  category: string;
  difficult: string;
}

const QuizziesSearchOutputItem: FC<DataFromProps> = ({
  category,
  difficult,
}) => {
  return (
    <div className="general-container_search-item">
      <Link
        href={`/quiz/preview/${category}/${difficult}`}
        className="general-container_search-item_link"
      >
        <div
          className="general-container_search-item_link-background"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.23)),url(/mini-${category}.jpg)`,
          }}
        ></div>
        <span className="general-container_search-item_link-category">
          {category}
        </span>
        <span className="general-container_search-item_link-difficult">
          {difficult}
        </span>
      </Link>
    </div>
  );
};
export default QuizziesSearchOutputItem;

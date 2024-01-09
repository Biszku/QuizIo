import { FC } from "react";
import Link from "next/link";
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
            backgroundImage: `linear-gradient(rgb(101 101 101 / 68%), rgba(59, 59, 59, 0.77), rgb(83 83 83 / 68%)),url(/mini-${category}.jpg)`,
          }}
        >
          <span
            className={`general-container_search-item_link-span-difficult general-container_search-item_link-span-${difficult}`}
          >
            {difficult}
          </span>
        </div>
      </Link>
    </div>
  );
};
export default QuizziesSearchOutputItem;

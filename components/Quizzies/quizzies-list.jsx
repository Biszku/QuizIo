import Image from "next/image";

import Link from "next/link";

function QuizziesList() {
  return (
    <article className="general-container_list-container">
      <ul className="general-container_list-container_list">
        <li className="general-container_list-container_list-item">
          <Image
            src="/history.jpg"
            width={400}
            height={400}
            alt="A lot of books and some pictures"
            className="general-container_list-container_list-item_background"
          />
          <Link
            href="/quiz"
            className="general-container_list-container_list-item_link"
          >
            <div className="general-container_list-container_list-item_link_container">
              <p className="general-container_list-container_list-item_link_container-category">
                History
              </p>
              <span className="general-container_list-container_list-item_link_container-difficulty">
                Easy
              </span>
            </div>
          </Link>
        </li>
        <li className="general-container_list-container_list-item">
          <Image
            src="/music.jpg"
            width={400}
            height={400}
            alt="A lot of books and some pictures"
            className="general-container_list-container_list-item_background"
          />
          <Link
            href="/quiz"
            className="general-container_list-container_list-item_link"
          >
            <div className="general-container_list-container_list-item_link_container">
              <p className="general-container_list-container_list-item_link_container-category">
                Music
              </p>
              <span className="general-container_list-container_list-item_link_container-difficulty">
                Medium
              </span>
            </div>
          </Link>
        </li>
        <li className="general-container_list-container_list-item">
          <Image
            src="/science.jpg"
            width={400}
            height={400}
            alt="Some science things"
            className="general-container_list-container_list-item_background"
          />
          <Link
            href="/quiz"
            className="general-container_list-container_list-item_link"
          >
            <div className="general-container_list-container_list-item_link_container">
              <p className="general-container_list-container_list-item_link_container-category">
                Science
              </p>
              <span className="general-container_list-container_list-item_link_container-difficulty">
                Hard
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </article>
  );
}
export default QuizziesList;

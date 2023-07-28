import Link from "next/link";

function QuizziesList() {
  return (
    <article className="general-container_list-container">
      <ul className="general-container_list-container_list">
        <li
          className="general-container_list-container_list-item"
          style={{ backgroundImage: "url(./history.jpg)" }}
        >
          <Link
            href="/quiz"
            className="general-container_list-container_list-item_container"
          >
            <p className="general-container_list-container_list-item_container-category">
              History
            </p>
            <span className="general-container_list-container_list-item_container-difficulty">
              Easy
            </span>
          </Link>
        </li>
        <li
          className="general-container_list-container_list-item"
          style={{ backgroundImage: "url(./music.jpg)" }}
        >
          <Link
            href="/quiz"
            className="general-container_list-container_list-item_container"
          >
            <p className="general-container_list-container_list-item_container-category">
              Music
            </p>
            <span className="general-container_list-container_list-item_container-difficulty">
              Medium
            </span>
          </Link>
        </li>
        <li
          className="general-container_list-container_list-item"
          style={{ backgroundImage: "url(./science.jpg)" }}
        >
          <Link
            href="/quiz"
            className="general-container_list-container_list-item_container"
          >
            <p className="general-container_list-container_list-item_container-category">
              Science
            </p>
            <span className="general-container_list-container_list-item_container-difficulty">
              Hard
            </span>
          </Link>
        </li>
      </ul>
    </article>
  );
}
export default QuizziesList;

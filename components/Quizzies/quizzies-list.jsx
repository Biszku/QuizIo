import QuizziesListItem from "./quizzies-list-item";

function QuizziesList() {
  const RandomQuizzies = [
    { category: "random", difficulty: "easy" },
    { category: "random", difficulty: "medium" },
    { category: "random", difficulty: "hard" },
  ];

  return (
    <article className="general-container_list-container">
      <ul className="general-container_list-container_list">
        {RandomQuizzies.map((el) => (
          <QuizziesListItem
            difficult={{ category: el.category, difficulty: el.difficulty }}
          />
        ))}
      </ul>
    </article>
  );
}
export default QuizziesList;

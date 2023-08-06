import QuizziesListItem from "./quizzies-list-item";

interface RandomQuizziesPattern {
  id: number;
  category: string;
  difficulty: string;
}

function QuizziesList() {
  const RandomQuizzies: RandomQuizziesPattern[] = [
    { id: 1, category: "random", difficulty: "easy" },
    { id: 2, category: "random", difficulty: "medium" },
    { id: 3, category: "random", difficulty: "hard" },
  ];

  return (
    <article className="general-container_list-container">
      <ul className="general-container_list-container_list">
        {RandomQuizzies.map((el) => (
          <QuizziesListItem
            key={el.id}
            data={{ category: el.category, difficulty: el.difficulty }}
          />
        ))}
      </ul>
    </article>
  );
}
export default QuizziesList;

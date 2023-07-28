import QuizziesSearch from "./quizzies-search";
import QuizziesList from "./quizzies-list";

function Quizzies() {
  return (
    <>
      <input
        className="general-container-input"
        type="text"
        placeholder="Enter category of quiz"
      />
      <QuizziesSearch />
      <QuizziesList />
    </>
  );
}
export default Quizzies;

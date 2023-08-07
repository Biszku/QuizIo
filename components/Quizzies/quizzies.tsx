import QuizziesSearch from "./quizzies-search";
import QuizziesList from "./quizzies-list";

const Quizzies = () => {
  return (
    <>
      <input
        className="general-container-input input"
        type="text"
        placeholder="Enter category of quiz"
      />
      <QuizziesSearch />
      <QuizziesList />
    </>
  );
};
export default Quizzies;

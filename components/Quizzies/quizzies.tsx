import QuizziesSearch from "./quizzies-search-output";
import QuizziesList from "./quizzies-list";
import QuizziesSelecting from "./quzzies-selecting";

const Quizzies = () => {
  return (
    <>
      <QuizziesSelecting />
      <QuizziesSearch />
      <QuizziesList />
    </>
  );
};
export default Quizzies;

import QuizziesSearch from "./quizzies-search-output";
import QuizziesList from "./quizzies-list";
import QuizziesSearchBar from "./quzzies-searchbar";

const Quizzies = () => {
  return (
    <>
      <QuizziesSearchBar />
      <QuizziesSearch />
      <QuizziesList />
    </>
  );
};
export default Quizzies;

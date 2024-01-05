import MainNav from "@/components/Navigation/navigation";
import Quizzies from "@/components/Quizzies/quizzies";

const Home = async () => {
  return (
    <>
      <section className="general-container">
        <Quizzies />
      </section>
      <MainNav />
    </>
  );
};

export default Home;

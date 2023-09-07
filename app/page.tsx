import MainNav from "@/components/Navigation/navigation";
import Quizzies from "@/components/Quizzies/quizzies";

const Home = async () => {
  console.log(1);
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

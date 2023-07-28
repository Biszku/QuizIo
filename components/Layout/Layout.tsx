import "../../styles/main.scss";
import Header from "../Header/header";
import { Poppins } from "@next/font/google";
import Footer from "../Footer/footer";
import MainNav from "../Navigation/navigation";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: "400",
});

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className={poppins.className}>
      <Header />
      <main className="main-container">
        <div id="portal"></div>
        {children}
        <MainNav />
        <Footer />
      </main>
    </body>
  );
}

export default Layout;

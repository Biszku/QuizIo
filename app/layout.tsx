import "@/styles/main.scss";
import MainContextProvider from "@/context/context";
import type { Metadata } from "next";
import { FC } from "react";
import Footer from "@/components/Footer/footer";
import MainNav from "@/components/Navigation/navigation";
import Header from "@/components/Header/header";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Your favorite Quiz app!",
  description: "Awesome Quiz app!",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <MainContextProvider>
        <body className={poppins.className}>
          <Header />
          <main className="main-container">
            <div id="portal"></div>
            {children}

            <Footer />
          </main>
        </body>
      </MainContextProvider>
    </html>
  );
};

export default RootLayout;

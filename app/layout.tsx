import MainContextProvider from "@/context/context";
import LayoutPattern from "../components/Layout-pattern/layout-pattern";
import type { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Your favorite Quiz app!",
  description: "Awesome Quiz app!",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <MainContextProvider>
        <LayoutPattern>{children}</LayoutPattern>
      </MainContextProvider>
    </html>
  );
};

export default RootLayout;

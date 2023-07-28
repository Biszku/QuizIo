import Layout from "../components/Layout/layout";
import type { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Your favorite Quiz app!",
  description: "Awesome Quiz app!",
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <Layout>{children}</Layout>
    </html>
  );
};

export default RootLayout;

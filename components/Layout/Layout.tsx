import React from "react";
import "../../styles/main.scss";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </>
  );
}

export default Layout;

import React from "react";
import NavBar from "./NavBar";
import { FavProvider } from "./FavContext";

function Home({ children }) {
  return (
    <>
      <FavProvider>
        <NavBar />
        <div className="app-container">{children}</div>
      </FavProvider>
    </>
  );
}

export default Home;

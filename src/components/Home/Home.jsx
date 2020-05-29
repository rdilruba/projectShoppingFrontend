import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header"></header>
      <Header></Header>
      <p>HOME</p>
      <Footer></Footer>
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Layout from "../Layout/Layout";

function Home() {
  return (
    <div className="home-all">
      <header className="home-header"></header>
      <Header></Header>
      <Layout></Layout>
      <Footer></Footer>
    </div>
  );
}

export default Home;

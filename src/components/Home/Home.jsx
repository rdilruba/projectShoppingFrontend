import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import axios from "axios";
import Menu from "../Menu/Menu";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      basketList: [],
    };

    this.changeCategory = this.changeCategory.bind(this);
  }
  addBasket = (product) => {
    console.log("item added soldCount=0");

    this.setState((state) => ({
      basketList: [...state.basketList, product],
    }));
  };
  changeCategory(categoryId) {
    let connectionString =
      "https://shopper496.herokuapp.com/products" +
      (categoryId != null ? "/category/" + categoryId : "");

    axios.get(connectionString).then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  componentDidMount() {
    this.changeCategory(null);
  }
  render() {
    const listBasket = this.state.basketList;
    return (
      <div className="home-all">
        <Header listBasket={listBasket}></Header>
        <Menu changeCategory={this.changeCategory} />
        <Layout
          addBasket={this.addBasket}
          products={this.state.products}
        ></Layout>
      </div>
    );
  }
}

export default Home;

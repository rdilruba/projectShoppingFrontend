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
      category: null,
    };

    this.changeCategory = this.changeCategory.bind(this);
  }
  addBasket = (product) => {
    const index = this.state.basketList.indexOf(product);
    if (index < 0) {
      product.soldCount += 1;
      this.setState((state) => ({
        basketList: [...state.basketList, product],
      }));
    } else {
      const newList = this.state.basketList.slice();
      newList[index].soldCount += 1;
      this.setState({ basketList: newList });
    }
  };
  changeCategory(categoryId, category) {
    let connectionString =
      "https://shopper496.herokuapp.com/products" +
      (categoryId != null ? "/category/" + categoryId : "");

    axios.get(connectionString).then((response) => {
      this.setState({
        products: response.data,
        category: category,
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
          category={this.state.category}
        ></Layout>
      </div>
    );
  }
}

export default Home;

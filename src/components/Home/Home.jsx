import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import axios from 'axios'
import Menu from "../Menu/Menu";


class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      products: []
    }

    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(categoryId) {
    let connectionString = 'https://shopper496.herokuapp.com/products' + ((categoryId) ? ("/" + categoryId) : '')
    console.log(connectionString)
    axios.get(connectionString)
      .then((response) => {
        this.setState({
          products: response.data
        })
      });
  }

  componentDidMount() {
    this.changeCategory(null);
  }
  render() {
    return (
      <div className="home-all">
        <header className="home-header"></header>
        <Header></Header>
        <Menu changeCategory={this.changeCategory} />
        <Layout products = {this.state.products}></Layout>
      </div>
    )
  }
}

export default Home;

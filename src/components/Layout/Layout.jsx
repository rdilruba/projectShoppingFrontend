import React, { Component } from "react";
import { Divider, Row, Col } from "antd";

import axios from "axios";
import Item from "../Item/Item";
import "./Layout.scss";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      basketList: [],
    };
  }
  addBasket = (id) => {
    console.log("item added");
    this.setState((state) => ({
      basketList: [...state.basketList, id],
    }));
  };

  componentDidMount() {
    axios.get("https://shopper496.herokuapp.com/products").then(
      (response) => {
        this.setState({
          products: response.data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    const { products } = this.props;
    return (
      <div className="layout-all">
        <Divider
          orientation="center"
          style={{ color: "#444", fontWeight: "normal" }}
        >
          Ürünler
        </Divider>
        {
          <Row gutter={[48, 48]}>
            {products.map((product) => (
              <Col className="gutter-row" span={6} key={product.id}>
                <Item product={product} addBasket={this.addBasket}></Item>
              </Col>
            ))}
          </Row>
        }
      </div>
    );
  }
}

export default Layout;

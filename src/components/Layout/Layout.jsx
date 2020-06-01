import React from "react";
import { Divider, Row, Col } from "antd";

import axios from 'axios'
import Item from "../Item/Item";
import "./Layout.scss";

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('https://shopper496.herokuapp.com/products')
      .then((response) => {
        this.setState({
          products: response.data
        })
      }, (error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="layout-all">
        <Divider
          orientation="center"
          style={{ color: "#444", fontWeight: "normal" }}
        >
          Ürünler
      </Divider>
        <Row gutter={[48, 48]}>
          {
            this.state.products.map((product) =>
              <Col className="gutter-row" span={6}>
                <Item product={product}></Item>
              </Col>
            )
          }
        </Row>
      </div>
    )
  }
}

export default Layout;

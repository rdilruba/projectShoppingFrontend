import React from "react";
import { Divider, Row, Col } from "antd";

import Item from "../Item/Item";
import "./Layout.scss";

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      products: []
    }
  }

  render() {
    const { products } = this.props
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
            {
              products.map((product) =>
                <Col className="gutter-row" span={6} key={product.name}>
                  <Item product={product}></Item>
                </Col>
              )
            }
          </Row>
        }
      </div>
    )
  }
}

export default Layout;

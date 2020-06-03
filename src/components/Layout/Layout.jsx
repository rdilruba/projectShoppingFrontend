import React, { Component } from "react";
import { Divider, Row, Col } from "antd";
import Item from "../Item/Item";
import "./Layout.scss";

class Layout extends Component {
  render() {
    const { products, addBasket, category } = this.props;
    return (
      <div className="layout-all">
        <Divider
          orientation="center"
          style={{ color: "#444", fontWeight: "normal" }}
        >
          {category ? category : "All"}
        </Divider>
        {
          <Row gutter={[48, 48]}>
            {products.map((product) => (
              <Col className="gutter-row" span={6} key={product.id}>
                <Item product={product} addBasket={addBasket}></Item>
              </Col>
            ))}
          </Row>
        }
      </div>
    );
  }
}

export default Layout;

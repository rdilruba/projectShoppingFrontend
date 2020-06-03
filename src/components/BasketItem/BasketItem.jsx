import React from "react";
import { Card, Col } from "antd";
import "./BasketItem.scss";

const style = { width: "450px", marginBottom: "20px" };

class BasketItem extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <div className="Item">
        <Col className="gutter-row" span={4}>
          <Card style={style}>
            <div className="basket-item">
              <img
                style={{ maxHeight: 200 }}
                alt="example"
                src={product.imgUrl}
              />
              {product ? (
                <div className="basket-item-text">
                  <h3>{product.name}</h3>
                  <h4>Quantity: {product.soldCount}</h4>
                  <h4>Cost: {product.soldCount * product.price}$</h4>
                </div>
              ) : null}
            </div>
          </Card>
        </Col>
      </div>
    );
  }
}

export default BasketItem;

import React from "react";
import { Card, Avatar } from "antd";
import "./BasketItem.scss";

const { Meta } = Card;
const style = { width: "80%", padding: 20, marginLeft: 30 };

class BasketItem extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <div className="Item">
        <Card style={style}>
          {product ? (
            <Meta
              avatar={<Avatar src={product.imgUrl} />}
              title={product.name}
            />
          ) : null}
        </Card>
      </div>
    );
  }
}

export default BasketItem;

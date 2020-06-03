import React from "react";
import { Card, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Item.scss";

const { Meta } = Card;
const style = { width: "80%", padding: 20, marginLeft: 30, cursor: "default" };

class Item extends React.Component {
  render() {
    const { name, imgUrl, price } = this.props.product;
    const { addBasket } = this.props;
    return (
      <div className="Item">
        <Card
          hoverable
          style={style}
          cover={<img style={{ maxHeight: 300 }} alt="example" src={imgUrl} />}
        >
          <Meta
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
            title={name}
          />
          <div
            style={{
              letterSpacing: 1.4,
              textAlign: "center",
              marginTop: 24,
              fontSize: 24,
              color: "darkgreen",
              fontWeight: "bolder",
            }}
          >
            {price}$
          </div>
          <div
            style={{
              marginTop: 80,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              icon={<ShoppingCartOutlined />}
              onClick={() => addBasket(this.props.product)}
            >
              Add to Basket
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Item;

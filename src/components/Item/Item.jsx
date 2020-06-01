import React from "react";
import { Card, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Item.scss";

const { Meta } = Card;
const style = { width: "80%", padding: 20, marginLeft: 30 };

class Item extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="Item">
        <Card
          hoverable
          style={style}
          cover={
            <img
              alt="example"
              src={this.props.product.imgUrl}
            />
          }
        >
          <Meta
            style={{ display: "flex", justifyContent: "center" }}
            title={this.props.product.name}
            description="www.instagram.com"
          />
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button icon={<ShoppingCartOutlined />}>Add to Cart</Button>
          </div>
        </Card>
      </div>
    )
  }
}

export default Item;

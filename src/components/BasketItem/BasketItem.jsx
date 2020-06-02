import React from "react";
import { Card, Button, Avatar } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./BasketItem.scss";

const { Meta } = Card;
const style = { width: "80%", padding: 20, marginLeft: 30 };

class BasketItem extends React.Component {
  render() {
    return (
      <div className="Item">
        <Card style={style}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="title"
            description="www.instagram.com"
          />
        </Card>
      </div>
    );
  }
}

export default BasketItem;

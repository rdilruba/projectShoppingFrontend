import React from "react";
import { Card, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Item.scss";

const { Meta } = Card;
const style = { width: "80%", padding: 20, marginLeft: 30 };

function Item() {
  return (
    <div className="Item">
      <Card
        hoverable
        style={style}
        cover={
          <img
            alt="example"
            src="https://d23ic3f0nw4szy.cloudfront.net/marketpaketi/products/548702/ulker-cikolata-sutlu-tablet-80-gr-a029e5f3b8ea57eb594e4496fdaba3a3.jpg"
          />
        }
      >
        <Meta
          style={{ display: "flex", justifyContent: "center" }}
          title="Europe Street beat"
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
  );
}

export default Item;

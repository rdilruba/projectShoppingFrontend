import React from "react";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.scss";
import HeaderButton from "./Button/HeaderButton";
import BasketItem from "../BasketItem/BasketItem";

function Header() {
  return (
    <div className="header-navbar">
      <div
        style={{
          marginLeft: 80,
          fontSize: 50,
          letterSpacing: 0.5,
          width: "66%",
          fontFamily: "Playfair Display, serif",
        }}
      >
        <img
          style={{ marginRight: 20 }}
          height="100px"
          src="logo.png"
          alt="logo"
        ></img>
        SHOPPER
      </div>
      <div className="header-button-container">
        <HeaderButton
          title="LOGIN / REGISTER"
          content="Login olacak"
          text="LOGIN / REGISTER"
          icon={<UserOutlined style={{ marginRight: 18 }} />}
        />
        <HeaderButton
          title="Basket"
          content={<BasketItem></BasketItem>}
          text="BASKET"
          icon={<ShoppingCartOutlined style={{ marginRight: 18 }} />}
        />
      </div>
    </div>
  );
}

export default Header;

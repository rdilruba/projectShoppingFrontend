import React from "react";
import {
  UserOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./Header.scss";
import HeaderButton from "./Button/HeaderButton";
import Menu from "../Menu/Menu";

function Header() {
  return (
    <div>
      <div className="header-navbar">
        <div
          style={{
            marginLeft: 80,
            fontSize: 50,
            letterSpacing: 0.5,
            width: "60%",
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
        <div style={{ marginRight: 80, width: "40%", height: "100%" }}>
          <HeaderButton
            text="LOGIN"
            icon={<UserOutlined style={{ marginRight: 18 }} />}
          />
          <HeaderButton
            text="BASKET"
            icon={<ShoppingCartOutlined style={{ marginRight: 18 }} />}
          />
          <HeaderButton
            text="HOMEPAGE"
            icon={<HomeOutlined style={{ marginRight: 18 }} />}
          />
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;

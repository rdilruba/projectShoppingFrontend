import React from "react";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Header.scss";

function Header() {
  return (
    <div className="header-navbar">
      <header className="Header-header"></header>
      <Button style={{ marginRight: 20 }} icon={<UserOutlined />}>
        Login
      </Button>
    </div>
  );
}

export default Header;

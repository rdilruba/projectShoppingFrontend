import React from "react";
import "./Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <button className="menu-button">Chocolate</button>
      <button className="menu-button"> Clothing</button>
      <button className="menu-button"> Technology</button>
      <button className="menu-button"> Music</button>
      <button className="menu-button"> Furniture</button>
    </div>
  );
}

export default Menu;

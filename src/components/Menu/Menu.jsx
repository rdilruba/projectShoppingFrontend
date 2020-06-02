import React from "react";
import "./Menu.scss";

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    return (
      <div className="menu">
        <button onClick={() => this.props.changeCategory(3)} className="menu-button">Chocolate</button>
        <button onClick={() => this.props.changeCategory(1)} className="menu-button"> Clothing</button>
        <button onClick={() => this.props.changeCategory(4)} className="menu-button"> Technology</button>
        <button onClick={() => this.props.changeCategory(0)} className="menu-button"> Music</button>
        <button onClick={() => this.props.changeCategory(2)} className="menu-button"> Furniture</button>
      </div>
    )
  }
}

export default Menu;

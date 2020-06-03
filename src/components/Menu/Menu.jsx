import React from "react";
import "./Menu.scss";

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="menu">
        <button
          onClick={() => this.props.changeCategory(3, "Chocolate")}
          className="menu-button"
        >
          Chocolate
        </button>
        <button
          onClick={() => this.props.changeCategory(1, "Clothing")}
          className="menu-button"
        >
          {" "}
          Clothing
        </button>
        <button
          onClick={() => this.props.changeCategory(4, "Technology")}
          className="menu-button"
        >
          {" "}
          Technology
        </button>
        <button
          onClick={() => this.props.changeCategory(0, "Music")}
          className="menu-button"
        >
          {" "}
          Music
        </button>
        <button
          onClick={() => this.props.changeCategory(2, "Furniture")}
          className="menu-button"
        >
          {" "}
          Furniture
        </button>
      </div>
    );
  }
}

export default Menu;

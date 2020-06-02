import React, { Component } from "react";
import { Button } from "antd";

import Cart from "../../Cart/Cart";
import "./HeaderButton.scss";

class HeaderButton extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  showModal = () => {
    console.log("Hello");
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    const { icon, text, title, content } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <Button className="header-button" icon={icon} onClick={this.showModal}>
          {text}
        </Button>
        {visible ? (
          <Cart
            title={title}
            content={content}
            handleCancel={this.handleCancel}
            handleOk={this.handleOk}
          ></Cart>
        ) : null}
      </div>
    );
  }
}

export default HeaderButton;

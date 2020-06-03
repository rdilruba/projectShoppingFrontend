import React, { Component } from "react";
import Header from "../Header/Header";

import { CreditCardOutlined } from "@ant-design/icons";
class Pay extends Component {
  render() {
    const listBasket = this.props.location.listBasket;
    console.log(listBasket);
    return (
      <div>
        <Header listBasket={listBasket}></Header>
        <h1>
          <CreditCardOutlined />
          Hello
          {"listBasket"}
        </h1>
      </div>
    );
  }
}

export default Pay;

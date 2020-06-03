import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal, message, Row } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";

import "./Header.scss";
import BasketItem from "../BasketItem/BasketItem";
import Login from "../LoginView/Login";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleAuth: false,
      visibleBasket: false,
    };
  }

  openAuth() {
    this.setState({
      visibleAuth: true,
    });
  }

  openBasket() {
    this.setState({
      visibleBasket: true,
    });
  }

  handleOk = (e) => {
    this.setState({
      visibleAuth: false,
      visibleBasket: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visibleAuth: false,
      visibleBasket: false,
    });
  };
  handleCancelBuy = (user) => {
    if (user) {
      this.setState({
        visibleAuth: false,
        visibleBasket: false,
      });
    } else {
      message.info("You should loggin first.");
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }
  };
  calcCost = (product, totalCost) => {
    totalCost += product.price * product.soldCount;
    return totalCost;
  };

  logUserOut() {
    localStorage.removeItem("ShopperAuth");
    localStorage.removeItem("ShopperUser");
    message.info("You have logged out successfully.");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
  render() {
    const { listBasket } = this.props;
    let totalCost = 0;
    let totalNum = 0;
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
        <div hidden>
          {listBasket.map(
            (product) => (totalCost = this.calcCost(product, totalCost))
          )}
        </div>
        <div hidden>
          {listBasket.map((product) => (totalNum += product.soldCount))}
        </div>
        <div className="header-button-container">
          <Modal
            visible={this.state.visibleAuth || this.state.visibleBasket}
            title={this.state.visibleAuth ? "LOGIN - REGISTER" : "BASKET"}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={
              this.state.visibleBasket && listBasket.length > 0 ? (
                <div>
                  <h3>Total Cost: {totalCost} $</h3>
                  <Link
                    to={{
                      pathname: "/pay",
                      listBasket: listBasket,
                    }}
                  >
                    <Button
                      key="Buy"
                      type="primary"
                      onClick={this.handleCancelBuy(
                        localStorage.getItem("ShopperUser")
                      )}
                    >
                      Buy
                    </Button>
                  </Link>
                </div>
              ) : null
            }
            width={600}
          >
            {this.state.visibleAuth ? (
              <Login handleOk={this.handleOk}></Login>
            ) : null}
            {this.state.visibleBasket
              ? listBasket.map((product) => (
                  <Row
                    style={{ display: "flex", justifyContent: "center" }}
                    key={product.id}
                  >
                    <BasketItem product={product}></BasketItem>
                  </Row>
                ))
              : null}
            {this.state.visibleBasket && listBasket.length === 0 ? (
              <Row>
                <h3>There is no item</h3>
              </Row>
            ) : null}
          </Modal>

          {localStorage.getItem("ShopperUser") ? (
            <Button className="header-button" onClick={this.logUserOut}>
              <UserDeleteOutlined style={{ marginRight: 16 }} />
              LOG OUT
            </Button>
          ) : (
            <Button
              className="header-button"
              icon={<UserOutlined style={{ marginRight: 18 }} />}
              onClick={() => this.openAuth()}
            >
              {localStorage.getItem("ShopperUser")
                ? localStorage.getItem("ShopperUser").toUpperCase()
                : "LOGIN / REGISTER"}
            </Button>
          )}

          <Button
            className="header-button"
            icon={<ShoppingCartOutlined style={{ marginRight: 18 }} />}
            onClick={() => this.openBasket()}
          >
            <span className="circle">{totalNum}</span>
            BASKET
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;

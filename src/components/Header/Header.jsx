import React from "react";
import { UserOutlined, ShoppingCartOutlined, UserDeleteOutlined } from "@ant-design/icons";
import "./Header.scss";
import BasketItem from "../BasketItem/BasketItem";

import Login from '../LoginView/Login'
import { Button, Modal, message } from "antd";
import "../Header/Button/HeaderButton.scss";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      visibleAuth: false,
      visibleBasket: false
    }

    this.logUserOut = this.logUserOut.bind(this);
  }

  openAuth() {
    this.setState({
      visibleAuth: true
    })
  }

  openBasket() {
    this.setState({
      visibleBasket: true
    })
  }

  handleOk = (e) => {
    this.setState({
      visibleAuth: false,
      visibleBasket: false
    })
  }


  handleCancel = (e) => {
    this.setState({
      visibleAuth: false,
      visibleBasket: false
    })
  };

  logUserOut() {
    localStorage.removeItem('ShopperAuth');
    localStorage.removeItem('ShopperUser');
    message.info('You have logged out successfully.');
    setTimeout(
      function () {
        window.location.reload();
      }
        .bind(this),
      1500
    );

  }
  render() {
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
          <Modal
            visible={this.state.visibleAuth || this.state.visibleBasket}
            title={this.state.visibleAuth ? 'LOGIN - REGISTER' : 'BASKET'}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
            {
              this.state.visibleAuth ?
                <Login handleOk={this.handleOk}></Login>
                :
                (
                  this.state.visibleBasket ?
                    <BasketItem></BasketItem> :
                    null
                )
            }
          </Modal>

          {
            localStorage.getItem('ShopperUser') ?
              <Button className="header-button" onClick={this.logUserOut}>
                <UserDeleteOutlined style={{ marginRight: 16 }} />
                LOG OUT
              </Button>
              :
              <Button className="header-button" icon={<UserOutlined style={{ marginRight: 18 }} />} onClick={() => this.openAuth()}>
                {localStorage.getItem("ShopperUser") ? localStorage.getItem("ShopperUser").toUpperCase() : "LOGIN / REGISTER"}
              </Button>
          }


          <Button className="header-button" icon={<ShoppingCartOutlined style={{ marginRight: 18 }} />} onClick={() => this.openBasket()}>
            BASKET
          </Button>

        </div>

      </div>
    )
  }
}

export default Header;

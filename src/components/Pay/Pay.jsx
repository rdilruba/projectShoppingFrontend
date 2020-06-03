import React, { Component } from "react";
import Header from "../Header/Header";
import Cards from "react-credit-cards";
import moment from 'moment'


import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

import { CreditCardOutlined } from "@ant-design/icons";
import "react-credit-cards/lib/styles.scss";
class Pay extends Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleFocus = (name) => {
    this.setState({ focus: name })
  };
  handleNumberChange = (val) => {
    this.setState({ number: val });
  };
  handleCvcChange = (val) => {
    this.setState({ cvc: val });
  };
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleInfoChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleDateChange = (date, dateString) => {
    alert(dateString.substring(0, 2) + dateString.substring(3, 5))
    this.setState({ expiry: dateString });
  }

  render() {
    const listBasket = this.props.location.listBasket ? this.props.location.listBasket : [];
    const monthFormat = "MM/YY";

    return (
      <div style={{ margin: "auto" }}>
        <div>
          <Header listBasket={listBasket}></Header>
        </div>
        <div style={{ margin: "auto", backgroundColor: "red" }} id="PaymentForm">
          <div style={{ width: "40%", float: "left" }}>
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              name={this.state.name}
              number={this.state.number}
              focused={this.state.focus}
            />
          </div>

          <div style={{ width: "40%", float: "left" }}>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
            >
              <Form.Item>
                <InputNumber onFocus={() => this.handleFocus("number")} value={this.state.number} onChange={this.handleNumberChange}
                  style={{ maxWidth: 300, width: 300 }} placeholder="Card Number" maxLength={22} />
              </Form.Item>
              <Form.Item>
                <Input onFocus={() => this.handleFocus("name")} value={this.state.name}
                  onChange={this.handleNameChange} style={{ maxWidth: 300, width: 300 }} placeholder="Name and Surname" />
              </Form.Item>

              <Form.Item >
                <DatePicker selected={moment(this.state.expiry)} onFocus={() => this.handleFocus("expiry")}
                  onChange={this.handleDateChange} style={{ maxWidth: 300, width: 300 }} placeholder="Expiry Date" format={monthFormat} picker="month" />
              </Form.Item>

              <Form.Item>
                <InputNumber onFocus={() => this.handleFocus("cvc")} value={this.state.cvc}
                  onChange={this.handleCvcChange} style={{ maxWidth: 300, width: 300 }} placeholder="CVC" maxLength={3} />
              </Form.Item>

              <Form.Item>
                <Button>
                  <CreditCardOutlined />
                  Order
                  </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;

import React, { Component } from "react";
import Header from "../Header/Header";
import Cards from "react-credit-cards";
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

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    const listBasket = this.props.location.listBasket;
    const monthFormat = "MM/YYYY";

    return (
      <div>
        <Header listBasket={listBasket}></Header>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="middle">Middle</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [{ title: "Bamboo", value: "bamboo" }],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: "zhejiang",
                  label: "Zhejiang",
                  children: [
                    {
                      value: "hangzhou",
                      label: "Hangzhou",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker format={monthFormat} picker="month" />
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Switch">
            <Switch />
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form>
            <input
              type="tel"
              name="number"
              placeholder=".... .... .... ...."
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="text"
              name="name"
              placeholder="First and Last Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="number"
              name="expiry"
              maxLength={4}
              placeholder="MM/YY"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="number"
              name="cvc"
              maxLength={3}
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Pay;

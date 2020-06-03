import React, { Component } from "react";
import { Modal, Col } from "antd";
import BasketItem from "../BasketItem/BasketItem";

class Cart extends Component {
  render() {
    const { handleOk, handleCancel, title, content, list } = this.props;
    return (
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Modal
          visible={true}
          title={title}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          {list
            ? list.map((product) => (
                <Col className="gutter-row" span={6} key={product.id}>
                  <BasketItem product={product}></BasketItem>
                </Col>
              ))
            : null}
        </Modal>
      </div>
    );
  }
}

export default Cart;

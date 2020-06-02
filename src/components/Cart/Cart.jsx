import React, { Component } from "react";
import { Modal } from "antd";

class Cart extends Component {
  render() {
    const { handleOk, handleCancel, title, content } = this.props;
    return (
      <div>
        <Modal
          visible={true}
          title={title}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{content}</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default Cart;

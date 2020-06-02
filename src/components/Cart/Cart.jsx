import React, { Component } from "react";
import { Modal } from "antd";

class Cart extends Component {
  render() {
    const { handleOk, handleCancel, title, content } = this.props;
    return (
      <div style={{margin:"auto", textAlign: "center"}}>
        <Modal
          visible={true}
          title={title}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          {content}
        </Modal>
      </div>
    );
  }
}

export default Cart;

import React from "react";
import { Divider, Row, Col } from "antd";

import Item from "../Item/Item";
import "./Layout.scss";

function Layout() {
  return (
    <div className="layout-all">
      <Divider
        orientation="center"
        style={{ color: "#444", fontWeight: "normal" }}
      >
        Ürünler
      </Divider>
      <Row gutter={[48, 48]}>
        <Col className="gutter-row" span={6}>
          <Item></Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Item></Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Item></Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Item></Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Item></Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Item></Item>
        </Col>
      </Row>
    </div>
  );
}

export default Layout;

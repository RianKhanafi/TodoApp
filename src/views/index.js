import React from "react";
import { Header } from "../component";
import { Button, DatePicker, version, Row, Col, Input } from "antd";
import { Daily, Weekly, RightInfo } from "./todo";

const App = () => {
  return (
    <>
      <div className="mx-16 h-auto pb-32  ">
        <Header />
        <Row>
          <Col md={{ span: 7 }} className="pr-12">
            <Weekly />
          </Col>
          <Col md={{ span: 12 }} className="pr-12">
            <Daily />
          </Col>
          <Col md={{ span: 5 }}>
            <RightInfo />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default App;

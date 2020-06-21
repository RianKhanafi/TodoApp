import React from "react";
import { Header } from "../component";
import { Button, DatePicker, version, Row, Col } from "antd";
import { Daily, Weekly } from "./todo";
const App = () => {
  return (
    <>
      <div className="mx-16">
        <Header />
        <Row>
          <Col md={{ span: 7 }} className="pr-12">
            <Weekly />
          </Col>
          <Col md={{ span: 12 }} className="pr-12">
            <Daily />
          </Col>
          <Col md={{ span: 5 }}></Col>
        </Row>
      </div>
    </>
  );
};
export default App;

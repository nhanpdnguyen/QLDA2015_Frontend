import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import Quill from 'quill';

import './ChiTietBaiHoc.css';

export default class ChiTietBaiHoc extends Component {
  componentDidMount() {
    var quill = new Quill('#noi-dung-bai-hoc', {
      toolbar: '#toolbar',
      theme: 'snow'
    });
  }
  render() {
    return (
      <Row className="flex-md-grow-1 align-self-start p-3">
        <Col>
          <Row className="justify-content-center">
            <Col className="text-center">Toán</Col>
          </Row>
          <Row>Breadcrumb</Row>
          <Row>
            <Col xs="12">
              <div id="toolbar" />
            </Col>
            <Col xs="12">
              <div id="noi-dung-bai-hoc" />
            </Col>
          </Row>
        </Col>
        <Col md="4">
          CHAT BOX
				</Col>
      </Row>
    )
  }
}

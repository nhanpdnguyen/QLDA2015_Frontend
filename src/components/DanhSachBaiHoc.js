import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

import './DanhSachBaiHoc.css';

export default class DanhSachBaiHoc extends Component {
  render() {
    return (
      <Row className="flex-md-grow-1 align-self-start p-3">
        <Col md="8" className="ds-bai-hoc-container">
          <Row className="align-items-center ds-bai-hoc-title-container toan">
            <Col xs="5" className="text-center ds-bai-hoc-title toan">
              Toán
            </Col>
            <Col xs="7">
              <img src="/images/Toan-icon-01.png" className="img-fluid" alt="Bài học Toán" />
            </Col>
          </Row>
          <Row className="p-2 mt-3 ds-bai-hoc-content-container">
            <Col md="6" className="ds-bai-hoc-left-container">
              <Row>
                <Col xs="12" className="ds-bai-hoc-chuyen-de-title toan">Chương 1</Col>
                <Col>
                  <ul>
                    <li>Số thập phân</li>
                    <li>Phân số</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="ds-bai-hoc-chuyen-de-title toands-bai-hoc-chuyen-de-title toan">Chương 2</Col>
                <Col>
                  <ul>
                    <li>Bốn phép tính về số thập phân</li>
                    <li>Phân số</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col md="6" className="ds-bai-hoc-right-container">
              <Row>
                <Col xs="12" className="ds-bai-hoc-chuyen-de-title toands-bai-hoc-chuyen-de-title toan">Chương 3</Col>
                <Col>
                  <ul>
                    <li>Giải toán có lời văn</li>
                    <li>Đo lường</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="ds-bai-hoc-chuyen-de-title toan">Chương 4</Col>
                <Col>
                  <ul>
                    <li>Hình học</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="4">
          BẢNG VÀNG
				</Col>
      </Row>
    )
  }
}

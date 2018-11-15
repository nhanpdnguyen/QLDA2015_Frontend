import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

import './DanhSachBaiHoc.css';
const dsBaiHocToanDummy = {
  "category":
    {
      "_id": "5bd96e527c4ca705165a719c",
      "name": "Toán học",
      "imgUrl": "/images/Toan-icon-01.png",
      "topics": [
        {
          "_id": "5bd93b394cc1f80ed9625a61",
          "name": "Phân số và số thập phân",
          "lessons": [
            {
              "_id": "5bd916624a6df2038b277217",
              "title": "Phân số"
            },
            {
              "_id": "5bd43df4a6df2038b2ee32ad",
              "title": "Số thập phân"
            }
          ]
        }
      ]
    }
}
const dsBaiHocTiengVietDummy = {
  "category":
    {
      "_id": "5bd96e527c4ca705165a719c",
      "name": "Tiếng Việt",
      "imgUrl": "/images/Van-icon-01.png",
      "topics": [
        {
          "_id": "5bd93b394cc1f80ed9625a61",
          "name": "Chương 1",
          "lessons": [
            {
              "_id": "5bd916624a6df2038b277217",
              "title": "Luyện từ và câu"
            },
            {
              "_id": "5bd43df4a6df2038b2ee32ad",
              "title": "Từ trái nghĩa"
            }
          ]
        }
      ]
    }
}
const createDsBaiHoc = function (monHoc) {
  let dsBaiHoc;
  if (monHoc === 'toan') dsBaiHoc = dsBaiHocToanDummy;
  else dsBaiHoc = dsBaiHocTiengVietDummy;
  
  return (
    <Col md="8" className="ds-bai-hoc-container">
      <Row className={`align-items-center ds-bai-hoc-title-container ${monHoc}`}>
        <Col xs="5" className={`text-center ds-bai-hoc-title ${monHoc}`}>
          {dsBaiHoc['category']['name']}
        </Col>
        <Col xs="7">
          <img src={dsBaiHoc['category']['imgUrl']} className="img-fluid" alt="Bài học Toán" />
        </Col>
      </Row>
      <Row className="p-2 mt-3 ds-bai-hoc-content-container">
        <Col md="6" className="ds-bai-hoc-left-container">
          <Row>
            <Col xs="12" className={`ds-bai-hoc-chuyen-de-title ${monHoc}`}>Chương 1</Col>
            <Col>
              <ul>
                <li>Số thập phân</li>
                <li>Phân số</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className={`ds-bai-hoc-chuyen-de-title ${monHoc}`}>Chương 2</Col>
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
            <Col xs="12" className={`ds-bai-hoc-chuyen-de-title ${monHoc}`}>Chương 3</Col>
            <Col>
              <ul>
                <li>Giải toán có lời văn</li>
                <li>Đo lường</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className={`ds-bai-hoc-chuyen-de-title ${monHoc}`}>Chương 4</Col>
            <Col>
              <ul>
                <li>Hình học</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default class DanhSachBaiHoc extends Component {
  render() {
    const monHoc = this.props.match.params.monhoc;
    return (
      <Row className="flex-md-grow-1 align-self-start p-3">
        {createDsBaiHoc(monHoc)}
        <Col md="4">
          BẢNG VÀNG
				</Col>
      </Row>
    )
  }
}

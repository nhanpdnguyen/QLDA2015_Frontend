import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import _ from 'lodash';

import './DanhSachBaiHoc.css';

const createDsBaiHoc = function (monHoc, dsBaiHoc) {
  //chia danh sách các topic ra làm 2 phần
  const topicsLength = dsBaiHoc.topics.length;
  let [dsBaiHocLeft, dsBaiHocRight] = _.chunk(dsBaiHoc.topics, _.ceil(topicsLength / 2, 0));
  //trường hợp chỉ có 0 hoặc 1 topic
  dsBaiHocLeft = dsBaiHocLeft || [];
  dsBaiHocRight = dsBaiHocRight || [];

  return (
    <Col md="8" className="ds-bai-hoc-container">
      <Row className={`align-items-center ds-bai-hoc-title-container ${monHoc}`}>
        <Col xs="5" className={`text-center ds-bai-hoc-title ${monHoc}`}>
          {dsBaiHoc.name}
        </Col>
        <Col xs="7">
          <img src='/images/Van-icon-01.png' className="img-fluid" alt="Bài học Toán" />
        </Col>
      </Row>
      <Row className="p-2 mt-3 ds-bai-hoc-content-container">
        <Col md="6" className="ds-bai-hoc-left-container">
          {dsBaiHocLeft.map(topic => {
            return (
              <Row key={topic._id}>
                <Col xs="12" className={`ds-bai-hoc-chuyen-de-title ${monHoc}`}>{topic.name}</Col>
                <Col>
                  <ul>
                    {topic.lessons.map(lesson => {
                      return (
                        <li key={lesson._id}><Link to={`/bai-hoc/${monHoc}/${lesson._id}`}>{lesson.title}</Link></li>
                      )
                    })}
                  </ul>
                </Col>
              </Row>)
          })}
        </Col>
        <Col md="6" className="ds-bai-hoc-right-container">
          {dsBaiHocRight.map(topic => {
            return (
              <Row key={topic._id}>
                <Col xs="12" className={`ds-bai-hoc-chuyen-de-title ${monHoc}`}>{topic.name}</Col>
                <Col>
                  <ul>
                    {topic.lessons.map(lesson => {
                      return (
                        <li key={lesson._id}><Link to={`/bai-hoc/${monHoc}/${lesson._id}`}>{lesson.title}</Link></li>
                      )
                    })}
                  </ul>
                </Col>
              </Row>)
          })}
        </Col>
      </Row>
    </Col>
  )
}

export default class DanhSachBaiHoc extends Component {
  render() {
    const { monHoc, dsBaiHoc } = this.props;
    return (
      <Row className="flex-md-grow-1 align-self-start p-3">
        {createDsBaiHoc(monHoc, dsBaiHoc)}
        <Col md="4">
          BẢNG VÀNG
				</Col>
      </Row>
    )
  }
}

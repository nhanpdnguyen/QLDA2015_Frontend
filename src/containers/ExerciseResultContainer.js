import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import './ExerciseQuestionContainer.css'

const mapStateToProps = function () {
  return {

  }
}

const mapDispatchToProps = function () {
  return {

  }
}

class ExerciseResultContainer extends Component {
  render() {
    return (
      <Row className="flex-grow-1 justify-content-center">
        <Col xs="11" md="8">
          <Row className="justify-content-center">
            <Col className={`text-center bai-tap-title`}>Bài tập</Col>
          </Row>

          <Row className="ket-qua-bai-tap-container justify-content-center mt-4">
            <Col xs="12" className='text-center title my-2'>Tổng kết câu trả lời</Col>
            <Col xs="10" md="5" className="my-2 detail">
              <Row className="justify-content-center">
                <Col xs="8" md="8">Số câu trả lời đúng:</Col>
                <Col xs="4" md="4" className="pr-0">12/20</Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs="8" md="8">Số câu trả lời sai:</Col>
                <Col xs="4" md="4" className="pr-0">12/20</Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs="8" md="8">Số điểm tích lũy:</Col>
                <Col xs="4" md="4" className="pr-0">100 điểm</Col>
              </Row>
            </Col>
            <Col xs="10" className="text-center mt-4 mb-5">
              <button className="btn modal-btn">Trở về trang chủ</button>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseResultContainer);

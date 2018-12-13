import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import './ExaminationResult.css'
import { clearExamResult, receiveExamResult } from '../actions/examActions';

const mapStateToProps = function (state) {
  return {
    result: state.exam.result,
    examInfo: state.exam.examInfo,
    
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    clearResult: () => {
      dispatch(clearExamResult());
    }
  }
}

class ExerciseResultContainer extends Component {
  componentWillUnmount() {
    this.props.clearResult();
  }
  render() {
    const { result } = this.props;
    if (result.numberQuestion === 0) return <Redirect to="/" />;
    const { monHoc } = this.props.match.params;
    const isToan = monHoc === 'toan';
    const monHocText = isToan ? "Toán" : "Tiếng Việt";
    return (
      <Row className="flex-grow-1 justify-content-center">
        <Col xs="11" md="8">
          <Row className="justify-content-center">
            <Col className={`text-center bai-tap-title`}>{"Thi thử " + monHocText}</Col>
          </Row>

          <Row className="ket-qua-bai-tap-container-box justify-content-center mt-4">
            <Col xs="12" className='text-center title my-2 title-result-exam'>{"Tổng kết câu trả lời của đề"}
                <p>{this.props.examInfo.title} </p>
            </Col>
            <Col xs="10" md="5" className="my-2 detail">
              <Row className="justify-content-center">
                <Col xs="8" md="8">Số câu trả lời đúng:</Col>
                <Col xs="4" md="4" className="pr-0">{`${result.numberAnswerRight}/${result.numberQuestion}`}</Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs="8" md="8">Số câu trả lời sai:</Col>
                <Col xs="4" md="4" className="pr-0">{`${result.numberQuestion - result.numberAnswerRight}/${result.numberQuestion}`}</Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs="8" md="8">Số điểm tích lũy:</Col>
                <Col xs="4" md="4" className="pr-0">{`${result.point} điểm`}</Col>
              </Row>
            </Col>
            <Col xs="10" className="text-center mt-4 mb-4">
              <Link to="/">
                <button className="btn modal-btn">Trở về trang chủ</button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseResultContainer);
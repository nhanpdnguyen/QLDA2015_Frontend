import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import './ExerciseQuestionContainer.css'
import { clearExerciseResult } from '../actions/exerciseActions';

const mapStateToProps = function (state) {
  return {
    result: state.exercise.result
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    clearResult: () => {
      dispatch(clearExerciseResult());
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

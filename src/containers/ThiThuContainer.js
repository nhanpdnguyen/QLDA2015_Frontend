import React, { Component } from 'react';
import MultipleChoice from "../components/MultipleChoice";
import FillChoice from "../components/FillChoice";
import BreadCrumb from "../components/BreadCrumb";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import './ThiThuContainer.css';
import { CHOICE, FILL } from '../constants';
import { changeUserAnswerInExam } from '../actions/examActions';


const mapStateToProps = (state) => {
  return {
    examList: state.exam.currentExamList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAnswer: (data, index) => {
      dispatch(changeUserAnswerInExam(data, index))
    },
    getResult: () => {
      alert('Nộp bài');
    }
  }
}


class ThiThuContainer extends Component {
  render() {

    const breadCrumbProps = {
      baseText: this.props.monHoc === 'toan' ? 'Thi thử Toán' : 'Thi thử Tiếng Việt',
      additionalClasses: this.props.monHoc === 'toan' ? 'toan' : 'tieng-viet',
      baseUrl: '/thi-thu/' + this.props.monHoc,
      currentText: 'Đề ' + (this.props.currentExamIndex + 1)
    }

    return (
      <Row className="flex-grow-1 justify-content-center">
        <Col xs="12">
          <Row className="justify-content-center">
            <Col className={`text-center bai-tap-title`}>Thi thử</Col>
          </Row>
        </Col>

        <Col xs="10">
          <BreadCrumb {...breadCrumbProps} />
        </Col>

        <Col xs="10" className="exam-question-container pb-3">
          {this.props.examList.map((question, index) => {
            switch (question.type) {
              case CHOICE: {
                return <MultipleChoice className="mt-2" key={question._id} {...question} changeUserAnswer={(data) => this.props.changeUserAnswer(data, index)} />
              }
              case FILL: {
                return <FillChoice className="mt-2" key={question._id} {...question} changeUserAnswer={(data) => this.props.changeUserAnswer(data, index)} />
              }
              default: return null
            }
          })}

          <Row className="mt-3 justify-content-center">
            <Col xs="4" className="text-center">
              <button onClick={this.props.getResult} className="btn modal-btn">Nộp bài</button>
            </Col>
          </Row>
        </Col>

      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThiThuContainer);



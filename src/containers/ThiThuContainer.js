import React, { Component } from 'react';
import MultipleChoice from "../components/MultipleChoice";
import FillChoice from "../components/FillChoice";
import BreadCrumb from "../components/BreadCrumb";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import { Redirect } from 'react-router'

import './ThiThuContainer.css';
import { CHOICE, FILL } from '../constants';
import { changeUserAnswerInExam, getExaminationById, sendResultExam, setExamTimer, clearCurrentExamList } from '../actions/examActions';


const mapStateToProps = (state) => {
  return {
    examList: state.exam.currentExamList,
    examInfo: state.exam.examInfo,
    result: state.exam.result,
    timer: state.exam.timer,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { examId } = ownProps.match.params;
  return {
    changeUserAnswer: (data, index) => {
      dispatch(changeUserAnswerInExam(data, index))
    },
    getExamination: () => {
      dispatch(getExaminationById(examId))
    },
    getResult: (examList, examInfo) => {
      var listAnswer = { listAnswer: [] };
      examList.map(exam => {
        listAnswer.listAnswer.push(exam.userAnswer);
      })
      console.log("listAnswer", examInfo);
      dispatch(sendResultExam(examInfo._id, examInfo.type, examInfo.title, listAnswer));
    },
    clearQuestionList: () => {
      dispatch(clearCurrentExamList());
    },
  }
}


class ThiThuContainer extends Component {
  constructor(props) {
    super(props)
    this.props.getExamination();
  }

  componentWillUnmount() {
    this.props.getResult(this.props.examList, this.props.examInfo);
    this.props.clearQuestionList();
  }

  render() {
    const breadCrumbProps = {
      baseText: this.props.monHoc === 'toan' ? 'Thi thử Toán' : 'Thi thử Tiếng Việt',
      additionalClasses: this.props.monHoc === 'toan' ? 'toan' : 'tieng-viet',
      baseUrl: '/thi-thu/' + this.props.monHoc,
      currentText: 'Đề ' + this.props.examInfo.title,
      timer: this.props.examList.length !== 0 ? this.props.examInfo.timeDo : null,
    }
    const { examId, monhoc } = this.props.match.params;
    if (this.props.result.numberQuestion !== 0 && this.props.examList.length !== 0) {
      return <Redirect to={"/thi-thu/ketqua/" + monhoc + '/' + examId} />
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
        {
          this.props.examList.length !== 0
            ?
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
                  <button onClick={() => this.props.getResult(this.props.examList, this.props.examInfo)} className="btn modal-btn">Nộp bài</button>
                </Col>
              </Row>
            </Col>
            :
            <Col xs="10" className="exam-question-container pb-3">
              <Row >
                <Col xs="12" className='text-center title my-2 title-result-exam'>{"Bạn đã hoàn thành bài thi"}
                </Col>
              </Row>
            </Col>
        }

      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThiThuContainer);



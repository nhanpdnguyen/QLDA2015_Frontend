import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Countdown from 'react-countdown-now';
import { sendResultExam } from '../actions/examActions';
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    examList: state.exam.currentExamList,
    examInfo: state.exam.examInfo,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getResult: (examList, examInfo) => {
      var listAnswer = { listAnswer: [] };
      examList.map(exam => {
        listAnswer.listAnswer.push(exam.userAnswer);
      })
      dispatch(sendResultExam(examInfo._id, examInfo.type, examInfo.title, listAnswer));
    }
  }
}

class TimerCompletedContainer extends Component {
  render() {
    console.log("props completed ",this.props);
    this.props.getResult(this.props.examList, this.props.examInfo);  
    return (
      <div> </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TimerCompletedContainer);

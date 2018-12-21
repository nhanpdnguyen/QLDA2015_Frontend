import React, { Component } from 'react';
import { sendResultExam } from '../actions/examActions';
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    examList: state.exam.currentExamList,
    examInfo: state.exam.examInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResult: (examList, examInfo) => {
      var listAnswer = { listAnswer: [] };
      examList.forEach(exam => {
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

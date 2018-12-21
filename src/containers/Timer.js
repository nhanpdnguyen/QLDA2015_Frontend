import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import { connect } from "react-redux";
import TimerCompletedContainer from "../containers/TimerCompletedContainer"
import {  setExamTimer } from '../actions/examActions';

const mapStateToProps = (state) => {
  return {
    timer: state.exam.timer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTimer: (time) => {
      dispatch(setExamTimer(time))
    },
  }
}

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <TimerCompletedContainer />
  } else {
    return <span style={{float: "right", color: "red"}}>Thời gian còn lại: {hours}:{minutes}:{seconds}</span>;
  }
};
const onTick = (setTimer,value) => {
  setTimer(value / 1000)
}
 class Timer extends Component {
  render() {
  
    return (
        <Countdown date={Date.now() + this.props.timer*1000} renderer={renderer} onTick={({total}) => onTick(this.props.setTimer, total)}/>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);


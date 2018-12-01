import MultipleChoice from "../components/MultipleChoice";
import FillChoice from "../components/FillChoice";
import BreadCrumb from "../components/BreadCrumb";
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import './ExerciseQuestionContainer.css';
import { CHOICE, FILL } from "../constants";
import { changeUserAnswerInExercise } from "../actions";

const mapStateToProps = function (state, ownProps) {
  return {
    ...state.exercise
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    changeUserAnswer: (userAnswer) => {
      dispatch(changeUserAnswerInExercise(userAnswer));
    }
  }
}

class ExerciseQuestionContainer extends Component {
  render() {
    let exerciseToDisplay = null;
    let exerciseIndex = this.props.currentExerciseIndex;
    let currentExercise = this.props.currentExerciseList[exerciseIndex];

    switch (currentExercise.type) {
      case CHOICE: {
        exerciseToDisplay = <MultipleChoice {...currentExercise} changeUserAnswer={this.props.changeUserAnswer} />;
        break;
      }
      case FILL: {
        exerciseToDisplay = <FillChoice {...currentExercise} changeUserAnswer={this.props.changeUserAnswer} />;
        break;
      }
      default: break;
    }

    const breadCrumbProps = {
      baseText: 'Bài tập Toán',
      additionalClasses: 'toan',
      baseUrl: '/bai-tap/toan/',
      currentText: 'Test'
    }

    return (
      <Row className="flex-grow-1 justify-content-center">
        <Col xs="12">
          <Row className="justify-content-center">
            <Col className={`text-center bai-tap-title`}>Bài tập</Col>
          </Row>
        </Col>
        <Col xs="10">
          <BreadCrumb {...breadCrumbProps} />
        </Col>
        <Col xs="10" className="exercise-question-container py-2">
          {exerciseToDisplay}
        </Col>
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseQuestionContainer);
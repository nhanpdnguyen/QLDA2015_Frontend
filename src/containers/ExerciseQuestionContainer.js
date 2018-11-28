import MultipleChoice from "../components/MultipleChoice";
import FillChoice from "../components/FillChoice";
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import './ExerciseQuestionContainer.css';
import { CHOICE, FILL } from "../constants";

const mapStateToProps = function (state, ownProps) {
  return {
    ...state.exercise
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {

  }
}

class ExerciseQuestionContainer extends Component {
  render() {
    let exercise = null;

    switch (this.props.currentExercise.type) {
      case CHOICE: {
        exercise = <MultipleChoice {...this.props.currentExercise} />;
        break;
      }
      case FILL: {
        exercise = <FillChoice {...this.props.currentExercise} />;
        break;
      }
      default: break;
    }

    return (
      <Row className="flex-md-grow-1 justify-content-center">
        <Col md="10" className="exercise-question-container">
          {exercise}
        </Col>
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseQuestionContainer);
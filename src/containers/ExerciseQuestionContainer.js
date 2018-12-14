import MultipleChoice from "../components/MultipleChoice";
import FillChoice from "../components/FillChoice";
import BreadCrumb from "../components/BreadCrumb";
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import './ExerciseQuestionContainer.css';
import { CHOICE, FILL } from "../constants";
import { changeUserAnswerInExercise, goToNextQuestionIfPossible, answerExerciseQuestion, closeExerciseModal, getExerciseListByTopicId, getTopicName } from "../actions";
import NotFound from "../components/NotFound";

const mapStateToProps = function (state, ownProps) {
  const { monhoc: monHoc, topicId } = ownProps.match.params;
  return {
    monHoc,
    topicId,
    ...state.exercise
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  const { topicId } = ownProps.match.params;
  return {
    changeUserAnswer: (userAnswer) => {
      dispatch(changeUserAnswerInExercise(userAnswer));
    },
    answer: () => {
      dispatch(answerExerciseQuestion());
    },
    goToNextQuestionIfPossible: () => {
      dispatch(closeExerciseModal());
      dispatch(goToNextQuestionIfPossible());
    },
    getExerciseList: () => {
      dispatch(getTopicName(topicId))
      dispatch(getExerciseListByTopicId(topicId));
    }
  }
}

class ExerciseQuestionContainer extends Component {
  constructor(props) {
    super(props)
    this.props.getExerciseList();
  }

  render() {
    let exerciseToDisplay = null;
    let questionIndex = this.props.currentQuestionIndex;
    let totalQuestion = this.props.currentExerciseList.length;
    let currentExercise = this.props.currentExerciseList[questionIndex];

    //redirect to result page if has result
    if (this.props.result.numberQuestion !== 0) return <Redirect to="/bai-tap/ket-qua" />;

    switch (currentExercise.type) {
      case CHOICE: {
        exerciseToDisplay = <MultipleChoice {...currentExercise} changeUserAnswer={this.props.changeUserAnswer} />;
        break;
      }
      case FILL: {
        exerciseToDisplay = <FillChoice {...currentExercise} changeUserAnswer={this.props.changeUserAnswer} />;
        break;
      }
      default: return <NotFound />;
    }

    const breadCrumbProps = {
      baseText: this.props.monHoc === 'toan' ? 'Bài tập Toán' : 'Bài tập Tiếng Việt',
      additionalClasses: this.props.monHoc === 'toan' ? 'toan' : 'tieng-viet',
      baseUrl: '/bai-tap/' + this.props.monHoc,
      currentText: this.props.topicName
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
          {/* Current exercise number/total */}
          <Row className="justify-content-center">
            <Col xs="12">
              <div className="current-exercise-number">{`Câu ${questionIndex + 1}/${totalQuestion}`}</div>
            </Col>
          </Row>

          {/* Exercise */}
          {exerciseToDisplay}

          {/* Error (if any) */}
          {this.props.error.hasNotAnswer ? <Row className="mt-2">
            <Col className="text-center text-danger">Bạn chưa chọn câu trả lời</Col>
          </Row> : null}

          {/* Answer button */}
          <Row className="justify-content-center mt-3">
            <Col xs="2" className="text-center px-0">
              <button onClick={this.props.answer} className="btn answer-btn p-1 w-100">Trả lời</button>
            </Col>
          </Row>

        </Col>

        {/* Modal */}
        <Modal id="exercise-modal" isOpen={this.props.modal.isOpen} backdrop={false} centered={true}>
          <ModalHeader></ModalHeader>
          <ModalBody>
            {
              this.props.modal.content.split('$$').map((item, index) => {
                return <p key={index}>{item}</p>
              })
            }
          </ModalBody>
          <ModalFooter className="justify-content-center">
            <button onClick={this.props.goToNextQuestionIfPossible} className="btn modal-btn">{this.props.modal.buttonContent}</button>
          </ModalFooter>
        </Modal>
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseQuestionContainer);
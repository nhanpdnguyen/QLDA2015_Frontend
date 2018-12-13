import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Quill from 'quill';
import './MultipleChoice.css';

export default class MuitipleChoice extends Component {
  componentDidMount() {
    this.quill = new Quill('.multiple-choice-question.id-' + this.props._id, {
      modules: {
        toolbar: false,
      },
      readOnly: true,
      theme: 'snow'
    });

    //set question contents
    let rawQuestionContent = this.props.content;

    this.quill.setContents(JSON.parse(rawQuestionContent));
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.content && nextProps.content !== this.props.content) {
      let rawQuestionContent = nextProps.content;
      this.quill.setContents(JSON.parse(rawQuestionContent));
    }
    return true;
  }

  handleInputChange = (e) => {
    this.props.changeUserAnswer(e.target.value);
  }

  render() {
    return (
      <Row className={"justify-content-center " + this.props.className}>
        <Col xs="12">
          <div className={"multiple-choice-question id-" + this.props._id}></div>
        </Col>
        <Col xs="10" md="7">
          <Row className="multiple-choice-answers">
            {Object.keys(this.props.answers).map((key) => {
              let isChecked = this.props.userAnswer === key;
              return (
                <Col key={key} xs="12" md="6">
                  <Row className="align-items-start">
                    <Col xs="1" className="p-0 text-center">
                      <input type="radio" name={"answer-" + this.props._id}
                        value={key} checked={isChecked}
                        onChange={this.handleInputChange} />
                    </Col>
                    <Col className="pl-1">{key.slice(3) + '. ' + this.props.answers[key]}</Col>
                  </Row>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    )
  }
}
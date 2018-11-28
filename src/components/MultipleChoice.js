import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Quill from 'quill';
import './MultipleChoice.css';

export default class MuitipleChoice extends Component {
  componentDidMount() {
    this.quill = new Quill('#exercise-content', {
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
    alert(e.target.value);
  }

  render() {
    return (
      <Row className="justify-content-center">
        <Col xs="12">
          <div id="exercise-content"></div>
        </Col>
        <Col xs="10" md="7">
          <Row>
            {Object.keys(this.props.answers).map((key, index) => {
              let isChecked = this.props.userAnswer === key;
              return (
                <Col key={key} xs="12">
                  <Row className="align-items-start">
                    <Col xs="1" className="p-0 mt-1 text-center">
                      <input type="radio" name="answer"
                        value={key} checked={isChecked}
                        onChange={this.handleInputChange} />
                    </Col>
                    <Col>{this.props.answers[key]}</Col>
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
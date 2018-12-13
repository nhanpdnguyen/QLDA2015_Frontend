import React, { Component } from 'react';
import Quill from 'quill';
import { Row, Col } from 'reactstrap';
import './FillChoice.css';

export default class FillChoice extends Component {
  componentDidMount() {
    this.quill = new Quill('.fill-choice-question.id-' + this.props._id, {
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
          <div className={"fill-choice-question id-" + this.props._id}>
          </div>
        </Col>
        <Col xs="10" md="7">
          <div className="form-group form-row">
            <label className="col-5 col-md-3 col-form-label text-dark">Câu trả lời: </label>
            <div className="col-7">
              <input type="text" className="form-control h-100"
                value={this.props.userAnswer} onChange={this.handleInputChange} />
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

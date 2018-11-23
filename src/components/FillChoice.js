import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import './FillChoice.css';
export default class FillChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = function (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        var stringQuestion = "10 + 49 + 121 - 88 x 3 = ?";
        var typeQuestion = "Điền vào chỗ trống: ";
        var answer = "";
        return (
            <Row className="flex-md-grow-1">
                <Col>
                    <div className="overall">
                        <Row>
                            <Col>
                                <div className="question">
                                    {typeQuestion}{stringQuestion}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="form-group row justify-content-center ">
                                    <label htmlFor="inputPassword3" classname="col-sm-5 col-form-label">Câu trả lời: </label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control col-form-label-sm" name="answer"
                                            value={this.state.answer} onChange={this.handleInputChange} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="answer-button justify-content-center">
                                    <button type="submit" className="button-submit-answer btn btn-success">Answer</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        )
    }
}

import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './MultipleChoice.css';

export default class MuitipleChoice extends Component {
  render() {
    return (
      <Row className="flex-md-grow-1">
        <Col>
          <div className="overall">
            <Row>
              <Col>
                <div className="question">
                  Bạn Tùng có đẹp trai hay không? Điều gì đã khiến cho bạn Tùng đẹp trai như vậy?
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="multiple">
                  <form>
                    <div className="row">
                      <div className="col-xs-6">
                        <div className="answer"><input type="radio" name="answer" />Tùng đẹp trai nhất</div>
                        <div className="answer"><input type="radio" name="answer" />Tùng đẹp trai nhì </div>
                      </div>
                      <div className="col-xs-6">
                        <div className="answer"><input type="radio" name="answer" />Tùng đẹp trai nhất</div>
                        <div className="answer"><input type="radio" name="answer" />Xin dừng cuộc chơi</div>
                      </div>
                    </div>
                  </form>
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
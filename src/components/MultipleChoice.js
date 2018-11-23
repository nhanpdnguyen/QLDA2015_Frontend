import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './MultipleChoice.css';

export default class MuitipleChoice extends Component {
  render() {
    return (
      <Row className="flex-md-grow-1">
        <Col>
          <div className="overall">
            <div className="question">
              Bạn Tùng có đẹp trai hay không? Điều gì đã khiến cho bạn Tùng đẹp trai như vậy?
          </div>
            <div className="multiple">
              <form>
                <div className="row">
                  <div className="col-xs-6">
                    <div className="answer"><input type="radio" name="answer1" defaultValue />Tùng đẹp trai nhất</div>
                    <div className="answer"><input type="radio" name="answer3" defaultValue />Tùng đẹp trai nhì </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="answer"><input type="radio" name="answer2" defaultValue />Tùng đẹp trai nhất</div>
                    <div className="answer"><input type="radio" name="answer4" defaultValue />Tùng đẹp trai</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}
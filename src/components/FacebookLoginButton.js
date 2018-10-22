import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './FacebookLoginButton.css';

export default class FacebookLoginButton extends Component {
  render() {
    return (
      <button className="btn btn-block py-0">
        <Row>
          <Col xs="2" className="pr-0 facebook-logo-container">
            <img src="./images/logo_facebook.png" alt="logo" />
          </Col>
          <Col xs="10" className="d-flex justify-content-center align-items-center">
            <div>Đăng nhập bằng Facebook</div>
          </Col>
        </Row>
      </button>
    )
  }
}

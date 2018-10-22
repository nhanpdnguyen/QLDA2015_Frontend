import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './GoogleLoginButton.css';

export default class GoogleLoginButton extends Component {
  render() {
    return (
      <button className="btn btn-block py-0">
        <Row>
          <Col xs="2" className="pr-0 google-logo-container">
            <img src="./images/logo_google.png" alt="logo" />
          </Col>
          <Col xs="10" className="d-flex justify-content-center align-items-center">
            <div>Đăng nhập bằng Google</div>
          </Col>
        </Row>
      </button>
    )
  }
}

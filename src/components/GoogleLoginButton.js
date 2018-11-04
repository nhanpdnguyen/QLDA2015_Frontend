import React, { Component } from 'react';
import { GoogleLogin } from "react-google-login";
import { Row, Col } from 'reactstrap';

import './GoogleLoginButton.css';

export default class GoogleLoginButton extends Component {
  render() {
    return (
      <div className="btn btn-block py-0">
        <Row>
          <Col xs="2" className="pr-0 google-logo-container">
            <img className="mt-2" src="./images/logo_google.png" alt="logo" />
          </Col>
          <Col xs="10" className="d-flex justify-content-center align-items-center">
            <GoogleLogin
              clientId="659342906206-r8fkbfldoporimfkqr43m5gchijk5qnu.apps.googleusercontent.com"
              buttonText="Đăng nhập với Google"
              style={{
                background: "transparent",
                color: "white",
                fontFamily: "inherit",
                fontWeight: "bold",
                fontSize: "1.6vw",
                border: "none"
              }}
              onSuccess={this.props.signInSuccessCallback}
              onFailure={this.props.signInFailCallback}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

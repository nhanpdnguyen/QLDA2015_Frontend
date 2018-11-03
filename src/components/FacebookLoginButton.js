import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import FacebookLogin from 'react-facebook-login';

import './FacebookLoginButton.css';

export default class FacebookLoginButton extends Component {
  render() {
    return (
      <div className="btn btn-block py-0">
        <Row>
          <Col xs="2" className="pr-0 facebook-logo-container">
            <img className="mt-2" src="./images/logo_facebook.png" alt="logo" />
          </Col>
          <Col xs="10" className="d-flex justify-content-center align-items-center">
            <FacebookLogin 
            appId="1422720417858064"
            autoLoad={false}
            fields="name,email,picture"
            textButton="Đăng nhập với Facebook"
            cssClass="facebook-login-button"
            callback={this.props.signInSuccessCallback}/>
          </Col>
        </Row>
      </div>
    )
  }
}

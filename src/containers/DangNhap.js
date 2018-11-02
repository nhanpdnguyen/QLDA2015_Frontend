import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { signIn } from '../actions';

import './DangNhap.css';

import GoogleLoginButton from '../components/GoogleLoginButton';
import FacebookLoginButton from '../components/FacebookLoginButton';
import LoginForm from '../components/LoginForm';
import GoogleLogin, { GoogleLogout } from 'react-google-login';

class DangNhap extends Component {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.signInSuccessCallback = this.signInSuccessCallback.bind(this);
    this.signInFailCallback = this.signInFailCallback.bind(this);
    }

  handleSignIn(userName, password) {
    console.log('signInn');
    this.props.dispatch(signIn(userName, password));
  }

  signInSuccessCallback(response) {
    console.log(response);
  }

  signInFailCallback(err) {
    console.log(err);
  }

  render() {
    if (this.props.isLoggedIn) return <Redirect to='/'></Redirect>
    return (
      <Row className="flex-md-grow-1 my-4 justify-content-center">
        <Col xs="12" md="6" className="d-flex justify-content-center align-content-center align-self-center">
          <div>Đăng nhập</div>
        </Col>
        <Col md="5">
        </Col>
        {/* Đăng nhập qua email */}
        <Col md="6" className="">
          <div className="dang-nhap-container py-4 my-3">
            <Row>
              <Col>
                <LoginForm signIn={this.handleSignIn}/>
              </Col>
            </Row>
            <Row>
            <Col xs="12" className="d-flex justify-content-center">
              <Link to="/quen-mat-khau">Quên mật khẩu</Link>
              <span>&nbsp;|&nbsp;</span>
              <Link to="/dang-ky">Đăng ký tài khoản mới</Link>
            </Col>
          </Row>
          </div>
        </Col>
        {/* Đăng nhập qua FB, Google */}
        <Col md="5" className="d-flex align-items-center">
          <Row className="flex-grow-1 justify-content-center fb-google-container">
            <Col xs="9" className="form-group">
              <GoogleLoginButton 
              signInSuccessCallback={this.signInSuccessCallback}
              signInFailCallback={this.signInFailCallback}
              />
            </Col>
            <Col xs="9" className="form-group">
              <FacebookLoginButton 
              signInSuccessCallback={this.signInSuccessCallback}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(DangNhap);
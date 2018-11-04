import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { signUp } from '../actions';

import './DangKy.css';

import SignUpForm from '../components/SignUpForm';
import { NORMAL_SIGN_UP } from '../constants';

class DangKy extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(firstName, userName, password, rePassword, email) {
    this.props.dispatch(signUp(firstName, userName, password, rePassword, 'abc@test.com', NORMAL_SIGN_UP));
  }

  render() {
    return (
      <Row className="flex-md-grow-1 my-4 mx-auto py-2 px-2 justify-content-center bg-white">
        <Col xs="12" md="6" className="d-flex justify-content-center align-content-center align-self-center">
          
        </Col>
        <Col md="3">
        </Col>
        {/* Đăng ký */}
        <Col md="6" className="">
          <h3 className="d-flex justify-content-center mainRed">Đăng ký tài khoản</h3>
          <hr className="mx-5"></hr>
          <p className="row justify-content-center">Hãy nhập thông tin bên dưới để đăng ký. Những mục có dấu<b className="mainRed d-inline">&nbsp;*&nbsp;</b>là bắt buộc</p>


          <div className="dang-ky-container py-4 my-3">
            <Col>
              <SignUpForm signUp={this.handleSignUp}></SignUpForm>
            </Col>
            <Col className="row justify-content-center">
              Nếu bạn đã là thành viên, &nbsp; <Link to="/dang-nhap">bấm vào đây để đăng nhập</Link>
            </Col>
          </div>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps (state) {
  return {
    isLoggedIn: state.isLoggedIn
  }
} 

export default connect(mapStateToProps)(DangKy);
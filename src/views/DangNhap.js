import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './DangNhap.css';

export default class DangNhap extends Component {

  render() {
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
                <form>
                  <div className="form-row justify-content-center">
                    <div className="form-group col-9">
                      <label>Tên đăng nhập</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-row justify-content-center">
                    <div className="form-group col-9">
                      <label>Mật khẩu</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="form-row justify-content-center">
                    <div className="form-group col-9 col-md-4">
                      <button type="submit" className="btn btn-block dang-nhap-btn">Đăng nhập</button>
                    </div>
                  </div>
                </form>
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
            </Col>
            <Col xs="9" className="form-group">
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
            </Col>
          </Row>
        </Col>

      </Row>
    )
  }
}
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './DangNhap.css';

export default class DangNhap extends Component {

  render() {
    return (
      <Row className="dang-nhap-container flex-md-grow-1">
        {/* Đăng nhập qua email */}
        <Col md="7">
          <Row>
            <Col className="d-flex justify-content-center align-content-center align-self-center">
              <div>Đăng nhập</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <form onSubmit="">
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
                    <button type="submit" className="btn btn-block">Đăng nhập</button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Col>
        {/* Đăng nhập qua FB, Google */}
        <Col md="5" className="d-flex align-items-center">
          <Row className="flex-grow-1 justify-content-center">
            <Col xs="9" className="form-group">
              <button className="btn btn-block">Facebook</button>
            </Col>
            <Col xs="9" className="form-group">
              <button className="btn btn-block">Google</button>
            </Col>
          </Row>
        </Col>
        <Col md="7">
          <Row>
            <Col xs="12" className="d-flex justify-content-center">
              <Link to="/quen-mat-khau">Quên mật khẩu</Link>
              <span>&nbsp;|&nbsp;</span>
              <Link to="/dang-ky">Đăng ký tài khoản mới</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
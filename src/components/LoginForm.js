import React, { Component } from 'react';

import './LoginForm.css'

export default class LoginForm extends Component {
  render() {
    return (
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
    )
  }
}

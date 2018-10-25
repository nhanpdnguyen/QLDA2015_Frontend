import React, { Component } from 'react';

import './SignUpForm.css'

export default class SignUpForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group row justify-content-center ">
            <label className="col-sm-4 col-form-label">Tên đăng nhập:</label>                
            <div className="form-group col-sm-8">
              <input type="text" className="form-control form-field" />
            </div>
        </div>
        <div className="form-group row justify-content-center ">
            <label className="col-sm-4 col-form-label">Mật khẩu:</label>                
            <div className="form-group col-sm-8">
              <input type="password" className="form-control form-field" />
            </div>
        </div>
        <div className="form-group row justify-content-center ">
            <label className="col-sm-4 col-form-label">Nhập lại mật khẩu:</label>                
            <div className="form-group col-sm-8">
              <input type="text" className="form-control form-field" />
            </div>
        </div>
        <div className="form-group row justify-content-center ">
            <label className="col-sm-4 col-form-label">Email:</label>                
            <div className="form-group col-sm-8">
              <input type="text" className="form-control form-field" />
            </div>
        </div>

        <div className="form-row justify-content-center mt-md-3 mt-sm-1 mt-lg-4">
          <div className="form-group col-9 col-md-4">
            <button type="submit" className="btn btn-block dang-nhap-btn">Đăng ký</button>
          </div>
        </div>
      </form>
    )
  }
}

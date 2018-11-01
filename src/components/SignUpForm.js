import React, { Component } from 'react';

import './SignUpForm.css'

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      userName: '',
      password: '',
      rePassword: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    let data = this.state;
    this.props.signUp(null, data.userName, data.password, data.rePassword);
  }

  render() {
    return (
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <div className="form-group row justify-content-center ">
          <label htmlFor="firstName" className="col-sm-4 col-form-label">Tên:</label>
          <div className="form-group col-sm-8">
            <input name="firstName" type="text" required
            className="form-control form-field" onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="form-group row justify-content-center ">
          <label htmlFor="userName" className="col-sm-4 col-form-label">Tên đăng nhập:</label>
          <div className="form-group col-sm-8">
            <input name="userName" type="text" required 
            className="form-control form-field" onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="form-group row justify-content-center ">
          <label htmlFor="password" className="col-sm-4 col-form-label">Mật khẩu:</label>
          <div className="form-group col-sm-8">
            <input name="password" type="password" required
            className="form-control form-field" onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="form-group row justify-content-center ">
          <label htmlFor="rePassword" className="col-sm-4 col-form-label">Nhập lại mật khẩu:</label>
          <div className="form-group col-sm-8">
            <input name="rePassword" type="text" required
            className="form-control form-field" onChange={this.handleInputChange}/>
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

import React, { Component } from 'react';

import './LoginForm.css'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    let {userName, password} = this.state;
    this.props.signIn(userName, password);
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="form-row justify-content-center">
          <div className="form-group col-9">
            <label htmlFor="userName">Tên đăng nhập</label>
            <input name="userName" type="text" className="form-control form-field" 
            value={this.state.userName} onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="form-row justify-content-center">
          <div className="form-group col-9">
            <label htmlFor="password">Mật khẩu</label>
            <input name="password" type="password" className="form-control form-field" 
            value={this.state.password} onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="form-row justify-content-center mt-3">
          <div className="form-group col-9 col-md-4">
            <button type="submit" className="btn btn-block dang-nhap-btn">Đăng nhập</button>
          </div>
        </div>
      </form>
    )
  }
}

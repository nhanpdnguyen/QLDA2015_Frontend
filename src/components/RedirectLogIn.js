import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class RedirectLogIn extends Component {
  render() {
    alert('Vui lòng đăng nhập')
    return (
      <Redirect to="/dang-nhap"/>
    )
  }
}

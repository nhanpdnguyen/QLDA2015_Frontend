import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.isLoggedIn };
  }

  return connect(mapStateToProps)(withRouter(Authentication));
}
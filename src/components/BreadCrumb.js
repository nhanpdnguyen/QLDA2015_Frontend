import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import './BreadCrumb.css';

export default class BreadCrumb extends Component {
  render() {
    return (
      <Row>
        <Col className={`breadcrumb-container ml-3 my-2 ${this.props.additionalClasses}`}>
          <Link to={this.props.baseUrl}>{this.props.baseText}</Link>
          <span> → </span>
          <span>{this.props.currentText}</span>
        </Col>
      </Row>
    )
  }
}

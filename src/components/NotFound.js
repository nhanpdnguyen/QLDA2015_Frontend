import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class NotFound extends Component {
  render() {
    return (
      <Row className="align-self-center justify-content-center" style={{background: '#f8f9fa7d'}}>
        <Col xs="12" md="5" className="mt-4 text-danger text-center" style={{ fontSize: '2rem' }}>Không tìm thấy trang <br/> Vui lòng thử lại sau</Col>
        <Col md="5">
          <img className="img-fluid" alt='Không tìm thấy trang' src="/images/Not-found.jpg" />
        </Col>
      </Row>
    )
  }
}

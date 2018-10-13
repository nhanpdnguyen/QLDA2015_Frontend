import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './TitleBox.css';

export default class TitleBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Row className="title-box py-1 px-3">
				{/* <Col xs="12" className="d-flex justify-content-end"></Col> */}
				<Col xs="6" md="5" className="d-flex flex-column align-items-center pr-0">
					<div className="title-box-header">{this.props.header}</div>
					<img className="title-box-img" src={this.props.src}></img>
				</Col>
				<Col className="title-box-content d-flex align-items-center p-0" xs="6" md="7">
					<ul className="m-0 pl-4">
						<li>Toán</li>
						<li>Tiếng Việt</li>
					</ul>
				</Col>
			</Row>
		)
	}
}




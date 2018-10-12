import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './TitleBox.css';

export default class TitleBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Row>
				<Col lg="5">
					<div className="title-box-header">{this.props.header}</div>
					<img className="title-box-img" src={this.props.src}></img>
				</Col>
				<Col className="title-box-content" lg="7">
					<ul>
						<li>Toán</li>
						<li>Tiếng Việt</li>
					</ul>
				</Col>
			</Row>
		)
	}
}




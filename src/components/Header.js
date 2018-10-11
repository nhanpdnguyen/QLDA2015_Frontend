import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import NavBar from './NavBar';
import './Header.css';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<Container fluid className="header">
					<Row className="py-2">
						<Col md="6" className="mr-auto">
							<Row className="">
								<Col md="3" className="d-flex align-items-center justify-content-center pr-0">
									<img className="w-75" src="/images/Logo-01.png" />
								</Col>
								<Col md="9" className="pl-0 d-flex flex-column justify-content-center">
									<div>TRUNG TÂM LUYỆN THI CANDYLIGHT</div>
									<div>CANDYLIGHT</div>
								</Col>
							</Row>
						</Col>
						<Col md="6">
							<Row className="d-flex justify-content-end">
								<Col md="2" className="d-flex align-items-center justify-content-center pr-0">
									<img className="w-75 rounded" src="/images/avatar.png" />
								</Col>
								<Col md="4" className="pl-0 d-flex flex-column justify-content-start">
									<div className="mt-1">Nguyễn Thanh Tùng</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
				<NavBar />
			</header>
		)
	}
}
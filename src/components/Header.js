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
				<Container fluid>
					<Row className="py-2">
						<Col md="6" className="mr-auto">
							<Row>
								<Col md="3" className="text-center pr-0">
									<img className="w-75" src="/images/Logo-01.png" />
								</Col>
								<Col md="9" className="mt-2 pl-0">
									TRUNG TÂM LUYỆN THI ONLINE <br />
									CANDYLIGHT
								</Col>
							</Row>
						</Col>
						<Col md="6">
							<Row>
								<Col md={{ size: 2, offset: 6 }} className="pr-0">
									<img className="w-75 rounded" src="/images/avatar.png" />
								</Col>
								<Col md={{ size: 4 }} className="mt-1 pl-0">
									<div>Nguyễn Thanh Tùng</div>
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
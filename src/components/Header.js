import React, { Component, Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import NavBar from './NavBar';
import './Header.css';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let Avatar;
		if (this.props.isLoggedIn) {
			Avatar = (
				<Fragment>
					<Col md="2" className="d-flex align-items-center justify-content-center pr-0">
						<img className="w-75 rounded" src="/images/avatar.png" />
					</Col>
					<Col md="4" className="d-flex flex-column justify-content-start pl-0">
						<div className="mt-1">Nguyễn Thanh Tùng</div>
					</Col>
				</Fragment>
			)
		}
		else {
			Avatar = (
				<Col md="3" className="d-flex align-items-center justify-content-end">
					<button className="btn btn-outline-primary">Đăng nhập</button>
				</Col>
			)
		}
		return (
			<header>
				<Container fluid className="header">
					<Row className="py-2">
						{/* Logo section */}
						<Col md="6" className="mr-auto">
							<Row className="">
								<Col md="3" className="d-flex align-items-center justify-content-center pr-0">
									<img className="w-75" src="/images/Logo-01.png" />
								</Col>
								<Col md="9" className="my-logo-text d-flex flex-column justify-content-center pl-0">
									<div>TRUNG TÂM LUYỆN THI ONLINE</div>
									<div id="logo-name">CANDYLIGHT</div>
								</Col>
							</Row>
						</Col>
						{/* Avatar section
						when use d-flex with col, dont use nested row, nested col is ok 
						*/}
						<Col md="6" className="d-flex justify-content-end">
							{Avatar}
						</Col>
					</Row>
				</Container>
				<NavBar />
			</header>
		)
	}
}
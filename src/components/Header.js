import React, { Component, Fragment } from 'react';
import { Row, Col, Container, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
	render() {
		let Avatar;
		if (this.props.isLoggedIn) { 
			Avatar = (
				<Fragment>
					<Col md="2" className="d-flex align-items-center justify-content-center pr-0">
						<img className="w-75 rounded" alt="" src="/images/avatar.png" />
					</Col>
					<Col md="5" className="d-flex justify-content-start pl-0">
						<div className="mt-1" alt="">{this.props.firstName + ' ' + this.props.lastName}</div>
						<div className="tai-khoan-dropdown mt-1 ml-2">
							<UncontrolledDropdown>
								<DropdownToggle caret color="info"></DropdownToggle>
								<DropdownMenu right>
									<DropdownItem><Link to="/cap-nhat-tai-khoan">Thông tin tài khoản</Link></DropdownItem>
									<DropdownItem onClick={this.props.signOut}>Đăng xuất</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</div>
					</Col>
				</Fragment>
			)
		}
		else {
			Avatar = (
				<Col md="3" className="d-flex align-items-center justify-content-end ">
					<Link to="/dang-nhap">
						<button className="btn btn-outline-primary dang-nhap-header-btn">Đăng nhập</button>
					</Link>
					<Link to="/dang-ky">
						<button className="ml-2 btn btn-outline-primary dang-ky-header-btn">Đăng ký</button>
					</Link>
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
									<img className="w-75" alt="" src="/images/Logo-01.png" />
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
			</header>
		)
	}
}
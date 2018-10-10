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
					<Row>
						<Col md="6" className="mr-auto">
							<Row>
								<Col md="3" className="text-center">
									<img className="w-75" src="/images/Logo-01.png" />
								</Col>
								<Col md="9">
									TRUNG TÂM LUYỆN THI ONLINE <br/>
									CANDYLIGHT
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className="d-flex">
						<Col md="1" className="mr-auto">
							<img className="img-fluid" src="/images/Logo-01.png" />
						</Col>
						<Col md="1" className="float-right">
							<img className="img-fluid" src="/images/Logo-01.png" />
							<div>Nguyễn Thanh Tùng</div>
						</Col>
					</Row>
					{/* <div className="d-flex">
                        <div className="mr-auto">
                            <img className="img-fluid" src="/images/Logo-01.png" />
                        </div>
                        <div className="">Avatar</div>
                    </div> */}
				</Container>
				<NavBar />
			</header>
		)
	}
}
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from '../components/Carousel';
import TitleBox from '../components/TitleBox';
import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Row>
				<Col md="8">
					<Row id="carousel-container">
						<Carousel></Carousel>
					</Row>
					<Row>
						<Col md="6">
							<TitleBox header="Bài học" src="/images/Main-icon1-01.png">
							</TitleBox>
						</Col>
						<Col md="6">
							<TitleBox header="Thi thử" src="/images/Main-icon2-01.png">
							</TitleBox>
						</Col>
						<Col md="6">
							<TitleBox header="Trắc nghiệm" src="/images/Main-icon3-01.png">
							</TitleBox>
						</Col>
						<Col md="6">
							<TitleBox header="Trò chơi" src="/images/Main-icon4-01.png">
							</TitleBox>
						</Col>
					</Row>
				</Col>
				<Col md="4">
					BẢNG VÀNG
				</Col>
			</Row>
		);
	}
}

export default Home;
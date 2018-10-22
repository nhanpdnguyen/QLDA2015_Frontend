import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Carousel from '../components/Carousel';
import TitleBox from '../components/TitleBox';
import './Home.css';

class Home extends Component {

	constructor(props) {
		super(props);
		this.titleBoxInfo = [{
			header: 'Bài học',
			src: '/images/Main-icon1-01.png',
			color: 0xd6f6d3
		},
		{
			header: 'Thi thử',
			src: '/images/Main-icon2-01.png',
			color: 0xf5f5cd
		},
		{
			header: 'Bài tập',
			src: '/images/Main-icon3-01.png',
			color: 0xf5d8e1
		},
		{
			header: 'Trò chơi',
			src: '/images/Main-icon4-01.png',
			color: 0xd2f5f5
		},]
	}

	render() {
		let titleBoxInfo = this.titleBoxInfo.map((item) => {
			return (<Col key={item.header} md="6">
				<TitleBox header={item.header} src={item.src} color={item.color}>
				</TitleBox>
			</Col>)
		})
		return (
			<Row>
				<Col md="8">
					<Row id="carousel-container">
						<Carousel></Carousel>
					</Row>
					<Row>
						{titleBoxInfo}
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
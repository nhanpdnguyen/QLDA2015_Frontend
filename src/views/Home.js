import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from '../components/Carousel';
import TitleBox from '../components/TitleBox';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Container fluid>
					<Row>
						<Col lg="8" md="8" sm="8" xs="8">
							<Row>
								<Carousel></Carousel>
							</Row>
							<Row>
								<Col lg="6" md="6" sm="6" xs="6">
									<TitleBox header="Bài học" src="/images/Main-icon1-01.png">
									</TitleBox>
								</Col>
								<Col lg="6" md="6" sm="6" xs="6">
									<TitleBox header="Thi thử" src="/images/Main-icon2-01.png">
									</TitleBox>
								</Col>
								<Col lg="6" md="6" sm="6" xs="6">
									<TitleBox header="Trắc nghiệm" src="/images/Main-icon3-01.png">
									</TitleBox>
								</Col>
								<Col lg="6" md="6" sm="6" xs="6">
									<TitleBox header="Trò chơi" src="/images/Main-icon4-01.png">
									</TitleBox>
								</Col>
							</Row>
						</Col>
						<Col lg="4" md="4" sm="4" xs="4">
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Home;
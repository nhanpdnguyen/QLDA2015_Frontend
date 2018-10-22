import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
// views
import Home from './views/Home.js';
import DangNhap from './views/DangNhap';
import BaiHoc from './views/BaiHoc';
// css
import './App.css';

const HelloWorld = function (props) {
	return <div>Hello world</div>
}

class App extends Component {

	render() {
		return (
			<Router>
				<div>
					<Header isLoggedIn={false}></Header>
					<NavBar></NavBar>
					<Container fluid id="main-content-container" className="d-flex align-items-center">
					{/* Row bọc ngoài cùng của 1 view cần phải xài thêm class flex-md-grow-1 */}
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/dang-nhap" component={DangNhap} />
								<Route path="/bai-hoc/:monhoc(toan|tieng-viet)" component={BaiHoc} />
								<Route component={HelloWorld} />
							</Switch>
					</Container>
					<Footer></Footer>
				</div>
			</Router>
		);
	}
}

export default App;
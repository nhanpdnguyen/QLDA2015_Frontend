import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// components
import Footer from './components/Footer';
import NavBar from './components/NavBar';
// containers
import HeaderContainer from './containers/HeaderContainer';
import Home from './containers/Home.js';
import DangNhap from './containers/DangNhap';
import BaiHoc from './containers/BaiHoc';
import DangKy from './containers/DangKy';
import UpdateProfile from './containers/UpdateProfile';
import CheckAuthenticated from "./containers/CheckAuthenticated";
// css
import './App.css';

const HelloWorld = function (props) {
	return <div>Hello world</div>
}

const cityOpt = [{ value: "HCM", label: "tp.Hồ Chí Minh" },
{ value: "Hải Phòng", label: "Hải Phòng" },
{ value: "Ninh Thuận", label: "Ninh Thuận" },
{ value: "Nha Trang", label: "Nha Trang" },
{ value: "Cà Mau", label: "Cà Mau" },
{ value: "HN", label: "Hà Nội" }
]
const rankOpt = [{ value: "G", label: "Giỏi" }, { value: "K", label: "Khá" }, { value: "TB", label: "Trung Bình" }, { value: "Y", label: "Yếu" }]

class App extends Component {

	render() {
		return (
			<Router>
				<div>
					{this.props.isRequesting ?
						<div className="spinner-container d-flex justify-content-center align-items-center">
							<div className="spinner"></div>
						</div> : null
					}
					<HeaderContainer></HeaderContainer>
					<NavBar></NavBar>
					<Container fluid id="main-content-container" className="d-flex align-items-center">
						{/* Row bọc ngoài cùng của 1 view cần phải xài thêm class flex-md-grow-1 */}
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/dang-nhap" component={DangNhap} />
							<Route path="/bai-hoc/:monhoc(toan|tieng-viet)" component={BaiHoc} />
							<Route exact path="/dang-ky" component={DangKy} />
							<Route exact path="/cap-nhat-tai-khoan" component={CheckAuthenticated(UpdateProfile)} />
							<Route component={HelloWorld} />
						</Switch>
					</Container>
					<Footer></Footer>
				</div>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		isRequesting: state.isRequesting
	}
}

export default connect(mapStateToProps)(App);
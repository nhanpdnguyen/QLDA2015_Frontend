import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// components
import Footer from './components/Footer';

// containers
import HeaderContainer from './containers/HeaderContainer';
import Home from './containers/Home.js';
import DangNhap from './containers/DangNhap';
import DanhSachBaiHocContainer from './containers/DanhSachBaiHocContainer';
import ChiTietBaiHoc from './components/ChiTietBaiHoc';
import DangKy from './containers/DangKy';
import UpdateProfileContainer from './containers/UpdateProfileContainer';
import CheckAuthenticated from "./containers/CheckAuthenticated";
// css
import './App.css';
import NavBarContainer from './containers/NavBarContainer';

const HelloWorld = function (props) {
	return <div>Hello world</div>
}

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
					<NavBarContainer></NavBarContainer>
					<Container fluid id="main-content-container" className="d-flex align-items-center">
						{/* Row bọc ngoài cùng của 1 view cần phải xài thêm class flex-md-grow-1 */}
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/dang-nhap" component={DangNhap} />
							<Route exact path="/bai-hoc/:monhoc(toan|tieng-viet)" component={DanhSachBaiHocContainer} />
							<Route exact path="/bai-hoc/:monhoc(toan|tieng-viet)/:idbaihoc" component={ChiTietBaiHoc} />
							<Route exact path="/dang-ky" component={DangKy} />
							<Route exact path="/cap-nhat-tai-khoan" component={CheckAuthenticated(UpdateProfileContainer)} />
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
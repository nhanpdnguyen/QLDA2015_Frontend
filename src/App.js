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
import DanhSachBaiHoc from './components/DanhSachBaiHoc';
import DangKy from './containers/DangKy';
import UpdateProfileContainer from './containers/UpdateProfileContainer';
import CheckAuthenticated from "./containers/CheckAuthenticated";
import MuitipleChoice from "./components/MultipleChoice";
import FillChoice from "./components/FillChoice";

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
							<Route path="/bai-hoc/:monhoc(toan|tieng-viet)" component={DanhSachBaiHoc} />
							<Route exact path="/dang-ky" component={DangKy} />
							<Route exact path="/cap-nhat-tai-khoan" component={CheckAuthenticated(UpdateProfileContainer)} />
							<Route path="/bai-tap/test" component={MuitipleChoice}/>
							<Route path="/bai-tap-2/test" component={FillChoice}/>
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
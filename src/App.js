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
import ChiTietBaiHocContainer from './containers/ChiTietBaiHocContainer';
import DangKy from './containers/DangKy';
import UpdateProfileContainer from './containers/UpdateProfileContainer';
import ExerciseListContainer from './containers/ExerciseListContainer';
import Game from './components/Game';
import ExerciseQuestionContainer from './containers/ExerciseQuestionContainer';
import ExaminationListContainer from './containers/ExaminationListContainer';
import ExamResultContainer from './containers/ExamResultContainer';
import TeacherChatBox from './containers/teacher-chat-page/TeacherChatBoxPage.js'

// css
import './App.css';
import NavBarContainer from './containers/NavBarContainer';
import ChatBox from './containers/ChatBox';
import ThiThuContainer from './containers/ThiThuContainer';
import ExerciseResultContainer from './containers/ExerciseResultContainer';
import NotFound from './components/NotFound';
import RedirectLogIn from './components/RedirectLogIn';
import DoiThuongContainer from './containers/DoiThuongContainer';

const GVTV = 'gvtuvan';

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

					{(this.props.userName === GVTV && this.props.isLoggedIn) ?
						<TeacherChatBox></TeacherChatBox>
						:
						<div>
							<HeaderContainer></HeaderContainer>
							<NavBarContainer></NavBarContainer>
							<Container fluid id="main-content-container" className="d-flex align-items-center">
								{/* Row bọc ngoài cùng của 1 view cần phải xài thêm class flex-md-grow-1 */}
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/dang-nhap" component={DangNhap} />
									<Route exact path="/bai-hoc/:monhoc(toan|tieng-viet)" component={DanhSachBaiHocContainer} />
									<Route exact path="/bai-hoc/:monhoc(toan|tieng-viet)/:idbaihoc" component={this.props.isLoggedIn ? ChiTietBaiHocContainer : RedirectLogIn} />
									<Route exact path="/dang-ky" component={DangKy} />
									<Route exact path="/cap-nhat-tai-khoan" component={UpdateProfileContainer} />
									<Route path="/tro-choi" component={Game} />
									<Route exact path="/bai-tap/:monhoc(toan|tieng-viet)" component={ExerciseListContainer} />
									<Route exact path="/bai-tap/:monhoc(toan|tieng-viet)/:topicId" component={this.props.isLoggedIn ? ExerciseQuestionContainer : RedirectLogIn} />
									<Route exact path="/bai-tap/ket-qua" component={this.props.isLoggedIn ? ExerciseResultContainer : RedirectLogIn} />
									<Route exact path="/thi-thu/:monhoc(toan|tieng-viet)/:examId" component={this.props.isLoggedIn ? ThiThuContainer : RedirectLogIn} />
									<Route exact path="/thi-thu/:monhoc(toan|tieng-viet)" component={ExaminationListContainer} />
									<Route exact path="/thi-thu/ketqua/:monhoc(toan|tieng-viet)/:examId" component={this.props.isLoggedIn ? ExamResultContainer : RedirectLogIn} />
									<Route exact path="/doi-thuong" component={DoiThuongContainer} />
									<Route path="/teacher-chat-box" component={TeacherChatBox} />
									<Route component={NotFound} />
								</Switch>
							</Container>
							<Footer></Footer>
							<ChatBox className="chatbox"></ChatBox>
						</div>
					}
				</div>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		isRequesting: state.isRequesting,
		userName: state.profile.userName,
		isLoggedIn: state.auth.isLoggedIn,
		connection: state.messageReducer.connection,
		userId: state.profile._id,
		accessToken: state.auth.accessToken,
	}
}

export default connect(mapStateToProps)(App);

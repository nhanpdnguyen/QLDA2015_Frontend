import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Footer.css';

export default class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="d-flex align-items-end">
				<div className="ml-3 mb-3">
					<div>Công ty TNHH 10 thành viên Nhóm số 6</div>
					<div>Môn học Quản lý Dự án Phần mềm</div>
				</div>
			</footer>
		)
	}
}
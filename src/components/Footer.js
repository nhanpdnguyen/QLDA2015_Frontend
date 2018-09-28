import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import './Footer.css';

export default class Footer extends Component {
	constructor(props) {
    super(props);
  }
  
	render() {
        return (
            <footer className="mt-5">
                <div>
                    <div  className="ml-5">
                    Công ty TNHH 10 thành viên Nhóm số 6
                    <br></br>
                    Môn học Quản lý Dự án Phần mềm
                    </div>
                </div>
            </footer>
        )
    }
}
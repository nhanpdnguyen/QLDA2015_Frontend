import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Quill from 'quill';

import './ChiTietBaiHoc.css';

export default class ChiTietBaiHoc extends Component {
  constructor(props) {
    super(props);
    this.props.getLesson(this.props.idBaiHoc)
  }

  componentDidMount() {
    this.quill = new Quill('#noi-dung-bai-hoc', {
      modules: {
        toolbar: false,
      },
      readOnly: true,
      theme: 'snow'
    });
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps)
    if (nextProps.baiHoc) {
      const content = nextProps.baiHoc.content || null;
      this.quill.setContents(JSON.parse(content));
    }
    return true;
  }

  render() {
    const { monHoc, baiHoc } = this.props;
    const isToan = monHoc === 'toan';
    const monHocText = isToan ? "Toán" : "Tiếng Việt";
    return (
      <Row className="flex-md-grow-1 align-self-start w-100">
        <Col md="8">
          <Row className="justify-content-center">
            <Col className={`text-center ds-bai-hoc-title ${monHoc}`}>{monHocText}</Col>
          </Row>
          <Row>
            <Col className={`breadcrumb-container ml-3 my-2 ${monHoc}`}>
              <Link to={isToan ? "/bai-hoc/toan" : "/bai-hoc/tieng-viet"}>{"Bài học " + monHocText}</Link>
              <span> → </span>
              <span>{baiHoc && baiHoc.title}</span>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <div id="noi-dung-bai-hoc" className="p-md-3" />
            </Col>
          </Row>
        </Col>
        <Col md="4">
          CHAT BOX HỖ TRỢ
				</Col>
      </Row>
    )
  }
}

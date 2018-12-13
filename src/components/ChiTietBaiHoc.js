import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import BreadCrumb from './BreadCrumb';
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
    const breadCrumbProps = {
      additionalClasses: isToan ? 'toan' : 'tieng-viet',
      baseUrl: isToan ? '/bai-hoc/toan' : '/bai-hoc/tieng-viet',
      baseText: isToan ? "Bài học Toán" : "Bài học Tiếng Việt",
      currentText: baiHoc && baiHoc.title
    }
    return (
      <Row className="flex-md-grow-1 align-self-start">
        <Col md="8">
          <Row className="justify-content-center">
            <Col className={`text-center ds-bai-hoc-title ${monHoc}`}>{monHocText}</Col>
          </Row>
          <BreadCrumb {...breadCrumbProps}/>
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

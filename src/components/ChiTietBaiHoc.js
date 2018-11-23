import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import Quill from 'quill';

import './ChiTietBaiHoc.css';

const dummyData = {
  "ops": [
    {
      "attributes": {
        "color": "#e60000"
      },
      "insert": "Phân số"
    },
    {
      "attributes": {
        "align": "justify",
        "header": 1
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#e60000"
      },
      "insert": "1. Phân số thập phân"
    },
    {
      "attributes": {
        "align": "justify",
        "header": 2
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Các phân số 3/10, 5/100, 17/1000, đây là các Phân số thập phân"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Phân số 3/5, nếu viết dưới dạng phân số thập phân là 3/5 = 3/5 x 2/2 = 6/10"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Làm tương ứng với 4/7, 5/4, 20/25, …"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Nhận xét: có thể đổi một phân số thành phân số thập phân bằng cách tìm một số nhân với mẫu để có 10, 100, 1000, … rồi nhân tử số và mẫu số cho số đó."
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#e60000"
      },
      "insert": "2.  Hỗn số"
    },
    {
      "attributes": {
        "align": "justify",
        "header": 2
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Có 2 hình tròn và ¾ hình tròn nữa, là viết gọn là 2 khi có 2 và ¾ hay 2 + ¾ ta viết gọn là 2"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Hỗn số 2 gồm phần nguyên là 2, phần phân số là ¾"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Phần phân số của hỗn số bao giờ cũng bé hơn đơn vị"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Cách đọc & viết: "
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Khi đọc hỗn số ta đọc phần nguyên kèm theo “và” rồi đọc phân số"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": " Khi viết hôn số ta viết phần nguyên rồi viết phần phân số"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#e60000"
      },
      "insert": "3.  Bốn phép tính về phân số"
    },
    {
      "attributes": {
        "align": "justify",
        "header": 2
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#e60000"
      },
      "insert": "\ta.   Cộng, trừ"
    },
    {
      "attributes": {
        "align": "justify",
        "header": 3
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Muốn cộng (trừ) hai phân số cùng mẫu số, ta cộng (trừ) hai tử số lại với nhau, giữ nguyên mẫu số"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Muốn cộng (trừ) hai phân số khác mẫu số, ta quy đồng mẫu số, rồi cộng (trừ) hai phân số đã quy đồng"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#e60000"
      },
      "insert": "\tb.   Nhân chia"
    },
    {
      "attributes": {
        "align": "justify",
        "header": 3
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Muốn nhân hai phân số, ta lấy tử số nhân với tử số, mẫu số nhân với mẫu số"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    },
    {
      "attributes": {
        "color": "#212529"
      },
      "insert": "Muốn chia một phân số cho một phân số, ta lấy phân số bị chia nhân vố phân số chia đảo ngược (tử số thành mẫu số, mẫu số thành tử số)"
    },
    {
      "attributes": {
        "align": "justify",
        "list": "bullet"
      },
      "insert": "\n"
    }
  ]
}

export default class ChiTietBaiHoc extends Component {
  componentDidMount() {
    var quill = new Quill('#noi-dung-bai-hoc', {
      modules: {
        toolbar: false,
      },
      readOnly: true,
      theme: 'snow'
    });
    // const temp1 = JSON.stringify(dummyData); //stringify before sending to server
    // quill.setContents(JSON.parse(temp1));
    quill.setContents(dummyData);
  }
  render() {
    return (
      <Row className="flex-md-grow-1 align-self-start p-3 w-100">
        <Col md="8">
          <Row className="justify-content-center">
            <Col className="text-center ds-bai-hoc-title toan">Toán</Col>
          </Row>
          {/* <Row>Breadcrumb</Row> */}
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

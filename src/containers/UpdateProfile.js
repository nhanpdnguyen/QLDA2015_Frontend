import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './UpdateProfile.css';

const cityOpt = [
  { value: "HCM", label: "TP.Hồ Chí Minh" },
  { value: "Hải Phòng", label: "Hải Phòng" },
  { value: "Ninh Thuận", label: "Ninh Thuận" },
  { value: "Nha Trang", label: "Nha Trang" },
  { value: "Cà Mau", label: "Cà Mau" },
  { value: "HN", label: "Hà Nội" }
]
const rankOpt = [
  { value: "G", label: "Giỏi" },
  { value: "K", label: "Khá" },
  { value: "TB", label: "Trung Bình" },
  { value: "Y", label: "Yếu" }
]

export default class UpdateProfile extends Component {
  render() {
    return (
      <Row className="flex-md-grow-1 my-4 mx-auto py-4 px-2 justify-content-center bg-white">
        {/* Update container*/}
        <Col md="1"></Col>
        <Col md="10" className="">
          <h3 className="d-flex justify-content-center mainRed font-weight-bold">Cập nhật thông tin</h3>
          <hr className="mx-auto col-md-5 col-6"></hr>
          <form>
            <Row className="main-dialog p-3">
              <Col md="5">
                {/*left side */}
                <h4 className="subHeader mx-auto mb-5 justify-content-center d-flex">Thông tin học sinh</h4>

                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Họ và tên lót:</label>
                  <div className="form-group col-sm-8">
                    <input type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Tên:</label>
                  <div className="form-group col-sm-8">
                    <input type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Tỉnh/Thành phố:</label>
                  <div className="form-group col-sm-8">
                    <select className="form-control form-field">
                      <option></option>
                      {cityOpt.map((item) => {
                        return <option key={item.value} value={item.value}>{item.label}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Trường:</label>
                  <div className="form-group col-sm-8">
                    <input type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Học lực:</label>
                  <div className="form-group col-sm-8">
                    <select className="form-control form-field">
                      <option></option>
                      {rankOpt.map((item) => {
                        return <option key={item.value} value={item.value}>{item.label}</option>
                      })}
                    </select>
                  </div>
                </div>
              </Col>
              <Col></Col>
              <Col md="5">
                {/*right side */}
                <h4 className="subHeader mx-auto mb-5 justify-content-center d-flex">Thông tin phụ huynh</h4>

                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Họ và tên lót:</label>
                  <div className="form-group col-sm-8">
                    <input type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Tên:</label>
                  <div className="form-group col-sm-8">
                    <input type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Tỉnh/Thành phố:</label>
                  <div className="form-group col-sm-8">
                    <select className="form-control form-field">
                      <option></option>
                      {cityOpt.map((item) => {
                        return <option key={item.value} value={item.value}>{item.label}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Email:</label>
                  <div className="form-group col-sm-8">
                    <input type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Số điện thoại</label>
                  <div className="form-group col-sm-8">
                    <input type="text" className="form-control form-field" />
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </Col>
        <Col md="1"></Col>

        <button type="submit" className="col-3 mt-3 mr-3 btn btn-block dang-nhap-btn">Cập nhật</button>
        <button type="submit" className="col-3 mt-3 btn btn-block dang-nhap-btn">Để sau</button>

      </Row>

    )
  }
}
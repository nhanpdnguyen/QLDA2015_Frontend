import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import validator from 'validator';

import './UpdateProfile.css';

const cityOpt = [
  { value: "TP.Hồ Chí Minh", label: "TP.Hồ Chí Minh" },
  { value: "Hải Phòng", label: "Hải Phòng" },
  { value: "Ninh Thuận", label: "Ninh Thuận" },
  { value: "Nha Trang", label: "Nha Trang" },
  { value: "Cà Mau", label: "Cà Mau" },
  { value: "Hà Nội", label: "Hà Nội" }
]
const rankOpt = [
  { value: "Giỏi", label: "Giỏi" },
  { value: "Khá", label: "Khá" },
  { value: "Trung Bình", label: "Trung Bình" },
  { value: "Yếu", label: "Yếu" }
]

export default class UpdateProfile extends Component {
  constructor(props) {
    super(props);

    //destructuring needed properties
    this.state = (({
      firstName, lastName, region, school, capacity,
      firstNameParent, lastNameParent, emailParent, phoneParent, regionParent
    }) => ({
      firstName, lastName, region, school, capacity,
      firstNameParent, lastNameParent, emailParent, phoneParent, regionParent
    }))(this.props.initialProfile)

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnHome = this.returnHome.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    //validation
    let errors = [];
    let data = this.state;
    if (data.emailParent && !validator.isEmail(data.emailParent)) errors.push('Email không hợp lệ, vui lòng kiểm tra lại');
    if (errors.length !== 0) {
      alert(errors[0]);
      return;
    }

    this.props.updateProfile(this.state);
  }

  returnHome() {
    this.props.returnHome();
  }

  render() {
    return (
      <Row className="flex-md-grow-1 my-4 mx-auto py-4 px-2 justify-content-center bg-white">
        {/* Update container*/}
        <Col md="1"></Col>
        <Col md="10" className="">
          <h3 className="d-flex justify-content-center mainRed font-weight-bold">Cập nhật thông tin</h3>
          <hr className="mx-auto col-md-5 col-6"></hr>
          <form id="update-profile-form" onSubmit={this.handleSubmit}>
            <Row className="main-dialog p-3">
              <Col md="5">
                {/*left side */}
                <h4 className="subHeader mx-auto mb-5 justify-content-center d-flex">Thông tin học sinh</h4>

                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Họ và tên lót:</label>
                  <div className="form-group col-sm-8">
                    <input name="lastName" value={this.state.lastName} onChange={this.handleInputChange} type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Tên:</label>
                  <div className="form-group col-sm-8">
                    <input name="firstName" required value={this.state.firstName} onChange={this.handleInputChange} type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Tỉnh/Thành phố:</label>
                  <div className="form-group col-sm-8">
                    <select name="region" value={this.state.region} onChange={this.handleInputChange} className="form-control form-field">
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
                    <input name="school" value={this.state.school} onChange={this.handleInputChange} type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Học lực:</label>
                  <div className="form-group col-sm-8">
                    <select name="capacity" value={this.state.capacity} onChange={this.handleInputChange} className="form-control form-field">
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
                    <input name="lastNameParent" value={this.state.lastNameParent} onChange={this.handleInputChange} type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Tên:</label>
                  <div className="form-group col-sm-8">
                    <input name="firstNameParent" value={this.state.firstNameParent} onChange={this.handleInputChange} type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Tỉnh/Thành phố:</label>
                  <div className="form-group col-sm-8">
                    <select name="regionParent" value={this.state.regionParent} onChange={this.handleInputChange} className="form-control form-field">
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
                    <input name="emailParent" value={this.state.emailParent} onChange={this.handleInputChange} type="text" className="form-control form-field" />
                  </div>
                </div>
                <div className="form-group row justify-content-center ">
                  <label className="col-sm-4 col-form-label">Số điện thoại</label>
                  <div className="form-group col-sm-8">
                    <input name="phoneParent" value={this.state.phoneParent} onChange={this.handleInputChange} type="text" className="form-control form-field" />
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </Col>
        <Col md="1"></Col>

        <button form="update-profile-form" type="submit" className="col-3 mt-3 mr-3 btn btn-block dang-nhap-btn">Cập nhật</button>
        <button type="button" className="col-3 mt-3 btn btn-block dang-nhap-btn" onClick={this.returnHome}>Để sau</button>

      </Row>

    )
  }
}
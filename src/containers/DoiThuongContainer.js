import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import './DoiThuongContainer.css';
import { getMedalList, buyMedal } from '../actions/profileActions';

const mapStateToProps = function (state) {
  return {
    myMedalList: state.profile.medals || [],
    medalList: state.medal.list || [],
    fullName: state.profile.lastName + ' ' + state.profile.firstName,
    point: state.profile.pointReward
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getMedalList: () => {
      dispatch(getMedalList())
    },
    buyMedal: (id) => {
      dispatch(buyMedal(id));
    }
  }
}

class DoiThuongContainer extends Component {
  constructor(props) {
    super(props);
    this.props.getMedalList();
  }

  handleBuy = (id) => {
    if (this.userHasMedal(id)) {
      alert('Bạn đã có huy hiệu này rồi');
      return;
    }

    if (!this.userHasEnoughPoint(id)) {
      alert('Bạn không đủ điểm để mua huy hiệu');
      return;
    }

    let buy = window.confirm('Bạn có muốn mua huy hiệu ' + id + '?');
    if (buy) this.props.buyMedal(id);
    else return;
  }

  userHasEnoughPoint = (id) => {
    let { medalList, point } = this.props;
    for (let i = 0; i < medalList.length; i++) {
      console.log(medalList[i] === id);
      if (medalList[i]._id === id && point >= medalList[i].point) return true;
    }
    return false;
  }

  userHasMedal = (id) => {
    let { myMedalList } = this.props;
    for (let i = 0; i < myMedalList.length; i++) {
      if (myMedalList[i] === id) return true;
    }
    return false;
  }

  render() {
    return (
      <Row className="flex-grow-1 doi-thuong-container">
        <Col xs="12" className="text-center order-md-1 title">BẢNG HUY HIỆU</Col>
        <Col xs="12" md="3" className="order-md-3 text-center">
          <img className="img-fluid w-75 d-none d-md-inline" src="/images/avatar.png" alt="" />
          <div className="user-info my-3">
            <div className="text-center ten">{this.props.fullName}</div>
            <div className="text-center diem">Điểm tích lũy: <span>{this.props.point}</span></div>
          </div>
        </Col>
        <Col xs="12" md="9" className="order-md-2">
          <Row className="huy-hieu-container my-1 pb-2">
            <Col xs="12" className="text-center my-2 title">HUY HIỆU</Col>

            {this.props.medalList.map((medal) => {
              return (
                <Col onClick={() => this.handleBuy(medal._id)}
                  key={medal._id} xs="6" md="4">
                  <Row className="align-items-center">
                    <Col xs="4" className="pr-0">
                      <img className="img-fluid" src={`/images/huyhieu/${medal._id}.png`} alt="" />
                    </Col>
                    <Col xs="8" className="pr-0">
                      <div className="ten-huy-hieu">{`Huy hiệu ${medal._id}`}</div>
                      <div className="thong-tin-huy-hieu">{`Điểm đổi: ${medal.point} điểm`}</div>
                      <div className="thong-tin-huy-hieu">Tình trạng: {this.userHasMedal(medal._id) ? <span style={{ color: '#17a2b8' }}>Đã có</span> : <span>Chưa có</span>}</div>
                    </Col>
                  </Row>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoiThuongContainer)
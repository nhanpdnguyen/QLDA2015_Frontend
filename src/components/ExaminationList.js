import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import './ExaminationList.css'
class ExerciseList extends Component {
  constructor(props) {
    super(props)
    this.props.getExamTitleList(this.props.type);
  }

  shouldComponentUpdate(nextProps) {
    //update lại dsBaiHoc khi chuyển route
    if (this.props.type !== nextProps.type) {
      this.props.getExamTitleList(nextProps.type)
    }
    return true;
  }

  render() {
    let { dsBaiThi } = this.props;
    dsBaiThi = dsBaiThi || {};
    return (
      <Row className="flex-grow-1">
        <Col>
          <div className="ds-thi-thu">
            <div className="ds-thi-thu-branch text-center">Thi thử</div>
            <div className="ds-thi-thu-box justify-content-center">
              <div className="text-center ds-thi-thu-title">{this.props.monHoc}</div>
              <div className="row exam-list">
                {dsBaiThi.map(exam => {
                  return (
                    <div key={exam._id} className="col-sm-4 chuong">
                      <Link to={`/thi-thu/${this.props.type}/${exam._id}`} exam={exam} onClick={() => this.props.saveExamInfo(exam)}>
                        <div style={{textAlign: "center"}} className="chuong-number">{exam.title}</div>
                        <div className="list-bai-tap">
                        </div>
                        <div className="image-chuong"></div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ExerciseList;
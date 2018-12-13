import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import './ExerciseList.css'
class ExerciseList extends Component {
  constructor(props) {
    super(props)
    this.props.getLessonList(this.props.monHoc);
  }

  shouldComponentUpdate(nextProps) {
    //update lại dsBaiHoc khi chuyển route
    if (this.props.monHoc !== nextProps.monHoc) {
      this.props.getLessonList(nextProps.monHoc)
    }
    return true;
  }

  render() {
    let { dsBaiHoc } = this.props;
    dsBaiHoc = dsBaiHoc || {};
    let topics = dsBaiHoc.topics || [];
    return (
      <Row className="flex-grow-1">
        <Col>
          <div className="ds-bai-tap">
            <div className="ds-bai-tap-branch text-center">Bài tập</div>
            <div className="ds-bai-tap-box justify-content-center">
              <div className="text-center ds-bai-tap-title">{dsBaiHoc.name}</div>
              <div className="row">
                {topics.map(topic => {
                  return (
                    <div key={topic._id} className="col-sm-3 chuong">
                      <Link to={`/bai-tap/${this.props.monHoc}/${topic._id}`}>
                        <div className="chuong-number">{topic.name}</div>
                        <div className="list-bai-tap">
                          <ul>
                            {topic.lessons.map(lesson => {
                              return <li key={lesson._id} className="list">{lesson.title}</li>
                            })}
                          </ul>
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
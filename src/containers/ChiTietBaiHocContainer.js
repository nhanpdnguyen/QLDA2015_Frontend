import ChiTietBaiHoc from "../components/ChiTietBaiHoc";
import { connect } from "react-redux";
import { getLessonById } from "../actions";

const mapStateToProps = function (state, ownProps) {
  return {
    monHoc: ownProps.match.params.monhoc,
    idBaiHoc: ownProps.match.params.idbaihoc,
    baiHoc: state.learning.currentLesson,
    // baiHoc: dummyData
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    getLesson: (idBaiHoc) => {
      console.log(idBaiHoc);
      dispatch(getLessonById(idBaiHoc));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChiTietBaiHoc)
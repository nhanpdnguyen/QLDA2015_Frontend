import { connect } from 'react-redux';
import DanhSachBaiHoc from "../components/DanhSachBaiHoc";
import { getLessonListByCategory } from '../actions';
import { toanCategoryId, tiengVietCategoryId } from '../constants';

const mapStateToProps = function (state, ownProps) {
  const monHoc = ownProps.match.params.monhoc;
  return {
    monHoc,
    dsBaiHoc: state.learning.currentLessonList
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getLessonList: (monHoc) => {
      switch (monHoc) {
        case 'toan':
          return dispatch(getLessonListByCategory(toanCategoryId));
        case 'tieng-viet':
          return dispatch(getLessonListByCategory(tiengVietCategoryId));
        default: return null;
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachBaiHoc);
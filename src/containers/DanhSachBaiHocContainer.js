import { connect } from 'react-redux';
import DanhSachBaiHoc from "../components/DanhSachBaiHoc";
import { getLessonListByCategory } from '../actions';

const toanCategoryId = '5bd96e527c4ca705165a719c';
const tiengVietCategoryId = '5bddc78f5f6c2d92689023e5';

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
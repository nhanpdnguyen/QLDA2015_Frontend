import { connect } from 'react-redux';
import ExaminationList from "../components/ExaminationList";
import { getExamListByCategory, saveExamInfo } from '../actions';
import { MATH, VIETNAMESE } from '../constants';

const mapStateToProps = function (state, ownProps) {
  const monHoc = ownProps.match.params.monhoc;
  return {
    type: monHoc,
    monHoc: monHoc === 'toan' ? 'Toán Học' : 'Tiếng việt',
    dsBaiThi: state.exam.examTitleList
  }
}

const month = "12_2018";

const mapDispatchToProps = function (dispatch) {
  return {
    getExamTitleList: (monHoc) => {
      switch (monHoc) {
        case 'toan':
          return dispatch(getExamListByCategory(MATH, month));
        case 'tieng-viet':
          return dispatch(getExamListByCategory(VIETNAMESE, month));
        default: return null;
      }
    },
    saveExamInfo: (info) => {
      dispatch(saveExamInfo(info));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExaminationList);
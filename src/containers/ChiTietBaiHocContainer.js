import ChiTietBaiHoc from "../components/ChiTietBaiHoc";
import { connect } from "react-redux";
import { getLessonById, messageActions } from "../actions";

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
      dispatch(getLessonById(idBaiHoc));
    },
    openChatBox: () => {
      dispatch(messageActions.actionMiniatureChatBox({isOpen: true}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChiTietBaiHoc)
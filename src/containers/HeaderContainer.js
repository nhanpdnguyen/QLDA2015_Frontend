import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signOut } from "../actions";
import Header from '../components/Header';
import { NORMAL_SIGN_OUT } from "../constants";

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  firstName: state.profile.firstName,
  lastName: state.profile.lastName,
  point: state.profile.pointReward
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  signOut: () => {
    dispatch(signOut(NORMAL_SIGN_OUT));
    ownProps.history.push('/');
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
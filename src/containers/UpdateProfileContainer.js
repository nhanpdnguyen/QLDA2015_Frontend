import { connect } from 'react-redux';
import { updateUserProfile } from "../actions/index";
import UpdateProfile from "../components/UpdateProfile";

const mapStateToProps = function (state, ownProps) {
  return {
    initialProfile: state.profile
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    updateProfile: (profile) => {
      dispatch(updateUserProfile(profile));
    },
    returnHome: () => {
      //use history from the wrapping object of this container: CheckAuthenticated
      ownProps.history.push('/');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
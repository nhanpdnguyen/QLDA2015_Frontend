import React from 'react';
import { connect } from 'react-redux';
import './MenuBar.css'
import {withRouter} from "react-router-dom";
import { NORMAL_SIGN_OUT } from "../../constants";
import {messageTeacherActions} from '../../actions/messageTeacherActions.js';
import {signOut} from '../../actions/accountActions.js';
import helpers from '../../helpers/helpers';

class MenuBar extends React.Component {

    onLogoutApp = () => {
        this.props.signOut();
        if(this.props.isLoggedIn && this.props.connection !== null){
            let message = {
                token: null,
                userId: this.props.userId,
                type: helpers.TYPE_CLOSE_CONNECT,
            }
            this.props.connection.send(JSON.stringify(message));
        }

        if(this.props.connection){
            this.props.connection.close()   
        }

        var payload = {
            connection: null
        }

        this.props.actionSetConnection(payload);
        var payload = {
            idChannel: '',
            listMessagesTeacher: null
        }
        this.props.actionSetListMessagesTeacher(payload)
        this.props.history.push('/');
    }

    handleWindowClose = () => {

    }

    componentDidMount() {
        window.addEventListener('onbeforeunload', this.handleWindowClose);
    }
    
    componentWillUnmount() {
        window.removeEventListener('onbeforeunload', this.handleWindowClose);
    }

    render() {
        return (
            <div className="menu-bar">
                <div className="menus">
                    <div className="icon-app">
                        <img src="/images/icon_teacher.png" alt="avatar"/>
                        <span className='me-online'></span>
                    </div>

                    <div className="action-logout">
                        <img src= "/images/iconlogout.png" alt="avatar" onClick={this.onLogoutApp}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    userName: state.profile.userName,
    connection: state.messageTeacherReducer.connection,
    userId: state.profile._id

})

const mapDispatchToProps = (dispatch) => ({
    actionSetConnection: (payload) => dispatch(messageTeacherActions.actionSetConnection(payload)),
    signOut: () => dispatch(signOut()),
    actionSetListMessagesTeacher: (payload) => dispatch(messageTeacherActions.actionSetListMessagesTeacher(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuBar))

import React from 'react';
import classNames from 'classnames';
import './SiderbarLeft.css';
import { connect } from 'react-redux';
import moment from 'moment';
import {messageTeacherActions} from '../../actions/messageTeacherActions.js';

class Channel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lastMessage: ''
        }
    }

    setActiveChannel = (idChannel) => {
        var payload = {
            idChannelActive: idChannel
        }
        this.props.actionSetChannelActive(payload);

        //get all message of channel
        var listMessagesTeacher = this.props.listMessagesTeacher;
        var userId = this.props.userId;
        var idChannelTmp = (userId > idChannel) ? userId + idChannel : idChannel + userId;

        if(!listMessagesTeacher.get(idChannelTmp)){
            var payload = {
                idChannel: idChannelTmp
            }
            this.props.actionGetAllMessageOfChannelTeacher(payload);
        }
    }

    render(){
        const {channel} = this.props;
        const idChannelActive = this.props.idChannelActive;
        const listUsersOnline = this.props.listUsersOnline;
        if(listUsersOnline.indexOf(channel.id) != -1){
            channel.isOnline = true;
        }else{
            channel.isOnline = false;
        }

        const isOnline = channel.isOnline;
        return(
            <div onClick={() => {
                this.setActiveChannel(channel.id)
            }} key={channel.id} className={classNames('channel', { 'channel-active': channel.id === idChannelActive})}>
                <div className="user-image">
                    <img src="./images/avatar.png" alt="avatar" />
                    {
                        isOnline ? <span className='user-online'></span> : <span className='user-offline'></span>
                    }
                </div>
                <div className="channel-info">
                    <div className="channel-info-user">
                        <div className="name-user-chat">{channel.userName}</div>
                    </div>
                    {/* <p>{"hello every"}</p> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    idChannelActive: state.messageTeacherReducer.idChannelActive,
    listMessagesTeacher: state.messageTeacherReducer.listMessagesTeacher,
    userId: state.profile._id,
    listUsersOnline: state.messageTeacherReducer.listUsersOnline,
    listUsers: state.messageTeacherReducer.listUsers,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetChannelActive: (payload) => dispatch(messageTeacherActions.actionSetChannelActive(payload)),
    actionGetAllMessageOfChannelTeacher: (payload) => dispatch(messageTeacherActions.actionGetAllMessageOfChannelTeacher(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Channel)

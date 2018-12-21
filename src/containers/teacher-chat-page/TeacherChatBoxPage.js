import React from 'react';
import './TeacherChatBoxPage.css';
import MenuBar from './MenuBar.js';
import HeaderLeft from './HeaderLeft.js';
import HeaderContent from './HeaderContent.js';
import SiderbarLeft from './SiderbarLeft.js';
import MainMessageContent from './MainMessageContent.js';
import MessageInput from './MessageInput.js';
import { messageTeacherActions } from '../../actions/messageTeacherActions.js';
import { connect } from 'react-redux';
import helpers from '../../helpers/helpers.js';
import config from '../../config';

const GVTV = "gvtuvan"
class TeacherChatBoxPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight,
        }
    }

    remove = (array, element) => {
        if (array.length > 0) {
            const index = array.indexOf(element, 0);

            if (index !== -1) {
                array.splice(index, 1);
            }
        }
        return array;
    }

    decodeMessage(message) {
        let msg;
        msg = JSON.parse(message);
        return msg;
    }

    onResize = () => {
        this.setState({
            height: window.innerHeight,
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.onresize);
        if (this.props.isLoggedIn && this.props.userName === GVTV && this.props.userName.length !== 0
            && this.props.connection === null) {
            this.connectServer();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    componentDidUpdate() {
        if (this.props.listUsers.size === 0) {
            this.handleGetAllUser();
        }
        if (this.props.isLoggedIn && this.props.userName === GVTV && this.props.userName.length !== 0 && this.props.connection === null) {
            this.connectServer();
        }
    }


    handleMessage = (message) => {
        const msg = this.decodeMessage(message);
        const type = msg.type;
        var payload;
        switch (type) {
            case helpers.TYPE_MESSAGE_CREATE:
                var idChannel = msg.idChannel;
                var listMessagesTmp = this.props.listMessagesTeacher.get(idChannel);
                if (this.props.idChannelActive.length !== 0 && listMessagesTmp) {
                    var messageTmp = {
                        _id: msg._id,
                        idChannel: idChannel,
                        idSender: msg.idSender,
                        data: msg.data,
                        create: msg.create
                    }

                    listMessagesTmp.push(messageTmp);

                    var listMessagesTeacher = [];
                    listMessagesTeacher = listMessagesTeacher.concat(listMessagesTmp);

                    payload = {
                        idChannel: idChannel,
                        listMessagesTeacher: listMessagesTeacher
                    }
                    this.props.actionAddNewMessageTeacher(payload);
                }
                break;
            case helpers.TYPE_LIST_USER_ONLINE:
                payload = {
                    listUsersOnline: msg.listUsersOnline
                }
                this.props.actionSetListUsersOnline(payload);
                break;
            case helpers.TYPE_USERID_ONLINE:
                // console.log("receive user online");
                payload = {
                    newUserOnline: msg.idUserOnline
                }
                this.props.actionAddUserOnline(payload);
                break;
            case helpers.TYPE_USERID_OFFLINE:
                // console.log("receive user offline");
                var listUserOnlineTmp = this.remove(this.props.listUsersOnline, msg.idUserOffline);
                payload = {
                    listUsersOnline: listUserOnlineTmp
                }
                this.props.actionSetListUsersOnline(payload);
                break;
            case helpers.TYPE_MESSAGE_CREATE_USER:
                console.log("receive new user")
                payload = {
                    id: msg.data.id,
                    userName: msg.data.userName,
                    isOnline: msg.data.isOnline
                }
                this.props.actionAddUserChat(payload);
                console.log("receive new user: " + msg.data.userName)
                break;
            default:
        }
    }

    connectServer = () => {
        const ws = new WebSocket('ws:' + config.CHAT_SOCKET);

        ws.onopen = () => {
            // console.log("connect socket");   
            var payload = {
                connection: ws
            }
            this.props.actionSetConnection(payload);

            var message = {
                token: this.props.accessToken,
                type: helpers.TYPE_MESSAGE_AUTH,
                idReceiver: "",
                data: "authentication"
            }
            // console.log("send auth")
            this.props.connection.send(JSON.stringify(message));
        }

        ws.onmessage = (event) => {
            const message = event.data;
            this.handleMessage(message);
        }

        ws.onclose = () => {
            var payload = {
                connection: null
            }
            this.props.actionSetConnection(payload);
        }
    }

    disconnectServer = () => {

    }

    //get all channel
    handleGetAllUser = () => {
        this.props.actionGetAllUsers();
    }

    render() {
        const { height } = this.state;
        const style = {
            height: height,
        }

        return (
            <div style={style} className="page-message">
                <MenuBar></MenuBar>
                <div className="page-wrapper">
                    <div className="header-message">
                        <HeaderLeft></HeaderLeft>
                        <HeaderContent></HeaderContent>
                    </div>
                    <div className="main-message">
                        <SiderbarLeft></SiderbarLeft>
                        <div className="main-content">
                            <MainMessageContent></MainMessageContent>
                            <MessageInput></MessageInput>
                        </div>
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
    accessToken: state.auth.accessToken,
    listUsers: state.messageTeacherReducer.listUsers,
    userId: state.profile._id,
    idChannelActive: state.messageTeacherReducer.idChannelActive,
    listMessagesTeacher: state.messageTeacherReducer.listMessagesTeacher,
    listUsersOnline: state.messageTeacherReducer.listUsersOnline,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetConnection: (payload) => dispatch(messageTeacherActions.actionSetConnection(payload)),
    actionGetAllUsers: () => dispatch(messageTeacherActions.actionGetAllUsers()),
    actionAddNewMessageTeacher: (payload) => dispatch(messageTeacherActions.actionAddNewMessageTeacher(payload)),
    actionSetListUsersOnline: (payload) => dispatch(messageTeacherActions.actionSetListUsersOnline(payload)),
    actionAddUserOnline: (payload) => dispatch(messageTeacherActions.actionAddUserOnline(payload)),
    actionAddUserChat: (payload) => dispatch(messageTeacherActions.actionAddUserChat(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TeacherChatBoxPage);

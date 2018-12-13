import React from 'react';
import './ChatBox.css';
import MessageInput from './MessageInput.js';
import MessageContainer from './MessageContainer.js';
import { connect } from 'react-redux';
import {messageActions} from '../actions/messageActions';
import helpers from '../helpers/helpers.js';
import config from '../config';

const GVTV = 'gvtuvan';
class ChatBox extends React.Component{
    constructor(props){
        super(props);
    }
    
    decodeMessage(message){
        let msg;
        msg = JSON.parse(message);
        return msg;
    }

    componentDidMount = () => {
        if(this.props.isLoggedIn && this.props.userName !== GVTV && this.props.userName.length !== 0 && this.props.connection === null){
            this.connectServer();
            var payload = {
                isOpen: false
            }
            this.props.actionMinitureChatBox(payload);
        }
    }

    componentDidUpdate = () => {
        if(!this.props.isLoggedIn && this.props.connection !== null){
            if(this.props.connection){
                this.props.connection.close()   
            }
            var payload = {
                connection: null
            }
            this.props.actionSetConnection(payload);
            var payload = {
                isOpen: false
            }
            this.props.actionMinitureChatBox(payload);
            
            var payload = {
                listMessages: null
            }
            this.props.actionSetListMessages(payload);
        }

        if(this.props.isLoggedIn && this.props.userName !== GVTV && this.props.userName.length !== 0 && this.props.connection === null){ 
            // console.log("connect server")
            this.connectServer();
            var payload = {
                isOpen: false
            }

            this.props.actionMinitureChatBox(payload); 
        }
    }

    handleMiniatueChatBox = () => {
        var payload = {
            isOpen: !this.props.isOpen
        }
        this.props.actionMinitureChatBox(payload);

        if(this.props.isLoggedIn && this.props.listMessages === null){
            console.log(111111);
            this.handleGetAllMessage();
        }
    }

    handleMessage = (message) => {
        const msg = this.decodeMessage(message);
        const type = msg.type;

        switch(type){
            case helpers.TYPE_MESSAGE_ID_GV:
                var payload = {
                    idGVTV: msg.idGVTV
                }
                this.props.actionSetIdGVTV(payload);
                break;
            case helpers.TYPE_MESSAGE_CREATE:
                var messageTmp = {
                    _id: msg._id,
                    idChannel: msg.idChannel,
                    idSender: msg.idSender,
                    data: msg.data,
                    create: msg.create 
                }
                var payload = {
                    newMessage: messageTmp
                }
                if(this.props.listMessages !== null){
                    this.props.actionsAddNewMessage(payload);
                }
                break;
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
            //gui message auth
            var message = {
                token: this.props.accessToken,
                type: helpers.TYPE_MESSAGE_AUTH,
                idReceiver: "",
                data: "authentication"
            }
            this.props.connection.send(JSON.stringify(message));
            // console.log("send auth")
        }

        ws.onmessage = (event) => {
            const message = event.data;
            // console.log(message);
            this.handleMessage(message);
        }

        ws.onclose = () => {

            // console.log("disconnect");
        }
    }

    disconnectServer = () => {

    }

    handleGetAllMessage = () => {
        var idChannel = (this.props.idGVTV > this.props.userId) ? this.props.idGVTV + this.props.userId :
        this.props.userId + this.props.idGVTV;
        var payload = {
            idChannel: idChannel
        }
        this.props.actionGetAllMessageOfChannel(payload);
    }

    render(){
        const isOpen = this.props.isOpen; 
        return(
            <div className="container-fluid">
                <div className="row justify-content-end">
                    {isOpen?
                        <div className="col-3 container-chatbox">
                            <div className="box-shadow">
                                <div className="title-chatbox">
                                    <div className="name-title">Chat box</div>
                                    <div className ="icon-min">
                                        <img src="/images/icons8-horizontal-line-26.png" onClick={this.handleMiniatueChatBox}></img>
                                    </div>
                                </div>
                                <div className="content-message">
                                    <MessageContainer></MessageContainer>
                                </div>
                                <MessageInput></MessageInput>
                            </div>
                        </div>
                        :
                        <div className="col-3 container-chatbox-mini">
                            <div className="title-chatbox">
                                <div className="name-title">Chat box</div>
                                <div className ="icon-min">
                                    <img src="/images/icons8-horizontal-line-26.png" onClick={this.handleMiniatueChatBox}></img>
                                </div>
                            </div>
                        </div>
                    }                  
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpen: state.messageReducer.isOpen,
    isLoggedIn: state.auth.isLoggedIn,
    userName: state.profile.userName,
    connection: state.messageReducer.connection, 
    idGVTV: state.messageReducer.idGVTV,
    accessToken: state.auth.accessToken,
    listMessages: state.messageReducer.listMessages,
    userId: state.profile._id
})

const mapDispatchToProps = (dispatch) => ({
    actionMinitureChatBox: (payload) => dispatch(messageActions.actionMiniatureChatBox(payload)),
    actionSetConnection: (payload) => dispatch(messageActions.actionSetConnection(payload)),
    actionSetIdGVTV: (payload) => dispatch(messageActions.actionSetIdGVTV(payload)),
    actionGetAllMessageOfChannel: (payload) => dispatch(messageActions.actionGetAllMessageOfChannel(payload)),
    actionsAddNewMessage: (payload) => dispatch(messageActions.actionsAddNewMessage(payload)),
    actionSetListMessages: (payload) => dispatch(messageActions.actionSetListMessages(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);

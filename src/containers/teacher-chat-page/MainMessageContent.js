import React from 'react';
import './MainMessageContent.css';
import MessageItem from '../MessageItem.js';
import {messageTeacherActions} from '../../actions/messageTeacherActions.js';
import { connect } from 'react-redux';

class MainMessageContent extends React.Component{

    scrollMessageToBottom = () => {
        if (this.refMessage) {
            this.refMessage.scrollTop = this.refMessage.scrollHeight;
        }
    }

    componentDidUpdate() {
        this.scrollMessageToBottom();
    }
    
    handleGetAllMessageOfChannel = () => {
        const listMessagesTeacher = this.props.listMessagesTeacher;
        const idChannelActive = this.props.idChannelActive;
        const userId = this.props.userId;
        var idChannelTmp = (userId > idChannelActive) ? userId + idChannelActive : idChannelActive + userId;
        var listMessagesOfChannel = listMessagesTeacher.get(idChannelTmp);

        if(listMessagesOfChannel && listMessagesOfChannel.length >= 0){
            for(let i = 0; i < listMessagesOfChannel.length; i++){
                if(listMessagesOfChannel[i].idSender === userId){
                    listMessagesOfChannel[i].isMe = true;
                }else{
                    listMessagesOfChannel[i].isMe = false;
                }
            }
            return listMessagesOfChannel;
        }
        return [];
    }

    render(){ 
        const listMessageOfChannel = this.handleGetAllMessageOfChannel();
        return(
            <div ref={(refe) => { this.refMessage = refe }} className="message-container">
                {   
                    listMessageOfChannel.map((message, index) => {
                        return(
                            <MessageItem message={message} key={index}></MessageItem>   
                        )
                    })
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    idChannelActive: state.messageTeacherReducer.idChannelActive,
    listMessagesTeacher: state.messageTeacherReducer.listMessagesTeacher,
    userId: state.profile._id,
})

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMessageContent)

import React from 'react';
import './MessageContainer.css';
import MessageItem from './MessageItem.js';
import {connect} from 'react-redux';

class MessageContainer extends React.Component{

    scrollMessageToBottom = () => {
        if (this.refMessage) {
            this.refMessage.scrollTop = this.refMessage.scrollHeight;
        }
    }

    componentDidUpdate() {
        this.scrollMessageToBottom();
    }
    
    componentDidMount(){
        this.scrollMessageToBottom();
    }
    
    handleGetAllMessage = () => {
        var listMessages = this.props.listMessages;
        if(listMessages && listMessages !== null && listMessages.length > 0){
            for(let i = 0; i < listMessages.length; i++){
                if(listMessages[i].idSender === this.props.idUser){
                    listMessages[i].isMe = true;
                }else{
                    listMessages[i].isMe = false;
                }
            }
            return listMessages;
        }
        return [];
    }
    
    render(){
        const listMessages = this.handleGetAllMessage();

        return(
            <div ref={(refe) => { this.refMessage = refe }} className="message-container">
                {
                    listMessages.map((message, index)=>{
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
    isOpen: state.messageReducer.isOpen,
    isLoggedIn: state.auth.isLoggedIn,
    idGVTV: state.messageReducer.idGVTV,
    listMessages: state.messageReducer.listMessages,
    idUser: state.profile._id
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);

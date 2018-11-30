import React from 'react';
import './MessageContainer.css';
import MessageItem from './MessageItem.js';

class MessageContainer extends React.Component{

    scrollMessageToBottom = () => {
        if (this.refMessage) {
            this.refMessage.scrollTop = this.refMessage.scrollHeight;
        }
    }

    componentDidUpdate() {
        this.scrollMessageToBottom();
    }
    
    render(){
        const date = new Date();
        const message = {
            content:"hello every one",
            timeChat: date.getTime(),
            isMe: true
        }

        const messageTmp1 = {
            content:"hello every one",
            timeChat: date.getTime(),
            isMe: false
        }

        return(
            <div ref={(refe) => { this.refMessage = refe }} className="message-container">
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem>        
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem>  
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem>          
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem>        
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem>  
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem> 
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem>        
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem>  
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem>          
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem>        
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem>  
                <MessageItem message={message}></MessageItem>    
                <MessageItem message={messageTmp1}></MessageItem> 
            </div>
        )
    }
}

export default MessageContainer;

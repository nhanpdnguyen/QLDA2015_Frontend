import React from 'react';
import './ChatBox.css';
import MessageInput from './MessageInput.js';
import iconLine from '../resources/icons8-horizontal-line-26.png';
import MessageContainer from './MessageContainer.js';
class ChatBox extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row justify-content-end">
                    <div className="col-3 container-chatbox">
                        <div className="box-shadow">
                            <div className="title-chatbox">
                                <div className="name-title">Chat box</div>
                                <div className ="icon-min">
                                    <img src={iconLine} ></img>
                                </div>
                            </div>
                            <div className="content-message">
                                <MessageContainer></MessageContainer>
                            </div>
                            <MessageInput></MessageInput>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatBox;

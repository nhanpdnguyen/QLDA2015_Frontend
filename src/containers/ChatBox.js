import React from 'react';
import './ChatBox.css';
import MessageInput from './MessageInput.js';
import MessageContainer from './MessageContainer.js';
import { connect } from 'react-redux';
import {messageAction} from '../actions/messageAction.js';
class ChatBox extends React.Component{
    handleMiniatueChatBox = () =>{
        var payload = {
            isOpen: !this.props.isOpen
        }
        this.props.actionMinitureChatBox(payload);
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
})

const mapDispatchToProps = (dispatch) => ({
    actionMinitureChatBox: (payload) => dispatch(messageAction.actionMinitureChatBox(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);

import React from 'react';
import './ChatBox.css';
import MessageInput from './MessageInput.js';
import iconLine from '../resources/icons8-horizontal-line-26.png';
import MessageContainer from './MessageContainer.js';
import {messageActions} from '../actions/messageActions.js';
import { connect } from 'react-redux';

class ChatBox extends React.Component{
    handleMiniature = () => {
        var payload = {
            isOpen:!this.props.isOpen
        }
        this.props.actionMiniatureChatBox(payload);
    }

    render(){
        const isOpenChatBox = this.props.isOpen;
        return(
            <div className="container-fluid">
                <div className="row justify-content-end">
                    {isOpenChatBox? 
                        <div className="col-3 container-chatbox">
                            <div className="box-shadow">
                                <div className="title-chatbox">
                                    <div className="name-title">Chat box</div>
                                    <div className ="icon-min">
                                        <img src={iconLine} onClick={this.handleMiniature}></img>
                                    </div>
                                </div>
                                <div className="content-message">
                                    <MessageContainer></MessageContainer>
                                </div>
                                <MessageInput></MessageInput>
                            </div>
                        </div>
                        :
                        <div className="col-3 container-chatbox-miniture">
                            <div className="title-chatbox">
                                <div className="name-title">Chat box</div>
                                <div className ="icon-min">
                                    <img src={iconLine} onClick={this.handleMiniature}></img>
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
    actionMiniatureChatBox: (payload) => dispatch(messageActions.actionMiniatureChatBox(payload)),
})


export default connect(mapStateToProps, mapDispatchToProps) (ChatBox);

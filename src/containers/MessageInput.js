import React from 'react';
import { connect } from 'react-redux';
import {messageActions} from '../actions/messageActions.js';
import './MessageInput.css';
import helpers from '../helpers/helpers.js';

// const GVTV = 'gvtuvan';

class MessageInput extends React.Component{

    handleChange = (event) => {
        var payload = {};
        payload.message = event.target.value;
        this.props.actionSetMessage(payload);
    }


    handleSend = () => {
        if(this.props.message.trim().length !== 0){
            let message = {
                token: this.props.accessToken,
                type: helpers.TYPE_MESSAGE_CREATE,
                idReceiver: this.props.idGVTV,
                data: this.props.message.trim()
            }
    
            if(this.props.connection != null){
                const packageSend = JSON.stringify(message);
                this.props.connection.send(packageSend);
            }
        }
        
        var payload ={
            message: ""
        }
        this.props.actionSetMessage(payload);
    }

    render(){
        return(
            <div className="container-input-message">
                <div className="text-input">
                    <textarea onKeyUp={(event) => {
                        if (event.key === 'Enter' && !event.shiftKey) {
                            this.handleSend();
                        }
                    }}
                    value={this.props.message} onChange={this.handleChange}  placeholder="Nhập tin nhắn..." />
                </div>
                <div className="constainer-button-send">
                    <button onClick={this.handleSend} className="send">Gửi</button>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    message: state.messageReducer.message,
    accessToken: state.auth.accessToken,
    connection: state.messageReducer.connection,
    idGVTV: state.messageReducer.idGVTV,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetMessage: (payload) => dispatch(messageActions.actionSetMessage(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps) (MessageInput);

import React from 'react';
import { connect } from 'react-redux';
import {messageActions} from '../actions/messageActions.js';
import './MessageInput.css';

class MessageInput extends React.Component{

    handleChange = (event) => {
        var payload = {};
        payload.message = event.target.value;
        this.props.actionSetMessage(payload);
    }

    handleSend = () => {

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
})

const mapDispatchToProps = (dispatch) => ({
<<<<<<< HEAD
    actionSetMessage: (payload) => dispatch(messageActions.actionSetMessage(payload)),
=======
    actionSetMessage: (payload) => dispatch(messageAction.actionSetMessage(payload)),
>>>>>>> 966d11190e61da42c3297b36841421c985a24c9b
})

export default connect(mapStateToProps, mapDispatchToProps) (MessageInput);

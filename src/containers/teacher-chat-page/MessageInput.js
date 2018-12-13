import React from 'react';
import { connect } from 'react-redux';
import { messageTeacherActions} from '../../actions/messageTeacherActions';
import './MessageInput.css';
import helpers from '../../helpers/helpers.js';
import { instanceOf } from 'prop-types';

class MessageInput extends React.Component{

    handleChange = (event) => {
        var payload = {};
        payload.message = event.target.value;
        this.props.actionSetMessageTeacher(payload);
    }

    handleSend = () => {
        if(this.props.idChannelActive.length !== 0 && this.props.message.trim().length !== 0){
            let message = {
                token: this.props.accessToken,
                type: helpers.TYPE_MESSAGE_CREATE,
                idReceiver: this.props.idChannelActive,
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
        this.props.actionSetMessageTeacher(payload);
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
    message: state.messageTeacherReducer.message,
    accessToken: state.auth.accessToken,
    connection: state.messageTeacherReducer.connection,
    idChannelActive: state.messageTeacherReducer.idChannelActive,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetMessageTeacher: (payload) => dispatch(messageTeacherActions.actionSetMessageTeacher(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps) (MessageInput);

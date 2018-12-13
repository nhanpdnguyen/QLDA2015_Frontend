import React from 'react';
import moment from 'moment';
import './MessageItem.css';
import lodash from 'lodash';
import { connect } from 'react-redux';

const admin = 'Giáo viên hướng dẫn:';

class MessageItem extends React.Component{


    renderMessage = (content) => {
        const html = lodash.split(content, '\n').map((text, key) => {
            return <div key={key} dangerouslySetInnerHTML={{ __html: text }} />
        })
        return html;
    }

    render(){
        const {message} = this.props;
        var user = this.props.listUsers.get(message.idSender);
        if(message.idSender === this.props.idGVTV){
            user = {};
            user.userName = admin;
        }
        // console.log(message);
        return(
            (message.isMe ? 
                <div className="line-me">
                    <div className='message-me'>
                        <div className='content-message-chat'>
                            {this.renderMessage(message.data)}
                        </div>
                        <div className='time-create-message'>
                            <div>{moment(message.create).format('HH:mm MM/DD/YY')}</div>
                        </div>
                    </div>
                </div>
                :
                <div className='line-admin'>
                    <div className='message-admin'>
                        <div className='name-author'>
                            {user.userName}
                        </div>
                        <div className='content-message-chat'>
                            {this.renderMessage(message.data)}
                        </div>
                        <div className='time-create-message'>
                            <div>{moment(message.create).format('HH:mm MM/DD/YY')}</div> 
                        </div>
                    </div>
                </div>            
            )
        )
    }
}

const mapStateToProps = (state) => ({
    idChannelActive: state.messageTeacherReducer.idChannelActive,
    listUsers: state.messageTeacherReducer.listUsers,    
    idGVTV: state.messageReducer.idGVTV,
})

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem)

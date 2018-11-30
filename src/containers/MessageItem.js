import React from 'react';
import moment from 'moment';
import './MessageItem.css';
import lodash from 'lodash';

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
        return(
            (message.isMe ? 
                <div className="line-me">
                    <div className='message-me'>
                        <div className='content-message-chat'>
                            {this.renderMessage(message.content)}
                        </div>
                        <div className='time-create-message'>
                            <div>{moment(message.timeChat).format('HH:mm MM/DD/YY')}</div>
                        </div>
                    </div>
                </div>
                :
                <div className='line-admin'>
                    <div className='message-admin'>
                        <div className='name-author'>
                            {admin}
                        </div>
                        <div className='content-message-chat'>
                            {this.renderMessage(message.content)}
                        </div>
                        <div className='time-create-message'>
                            <div>{moment(message.timeChat).format('HH:mm MM/DD/YY')}</div> 
                        </div>
                    </div>
                </div>            
            )
        )
    }
}

export default MessageItem;

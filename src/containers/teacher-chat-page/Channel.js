import React from 'react';
import classNames from 'classnames';
import './SiderbarLeft.css';
import { connect } from 'react-redux';
import moment from 'moment';

class Channel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lastMessage: ''
        }
    }

    setActiveChannel = (channel) => {
        // let payload = {};
        // payload.activeChannel = channel;
        // this.props.actionsSetActiveChannel(payload);

    }

    render(){
        const {channel} = "";
        // const activeChannel = this.props.activeChannel;
        const isOnline = true;
        
        return(
            <div onClick={() => {
                this.setActiveChannel(channel)
            }} key={""} className={classNames('channel', { 'channel-active':1 === 0 })}>
                <div className="user-image">
                    <img src="./images/avatar.png" alt="avatar" />
                    {
                        isOnline ? <span className='user-online'></span> : <span className='user-offline'></span>
                    }
                </div>
                <div className="channel-info">
                    <div className="channel-info-user">
                        <div className="name-user-chat">{"Tan Tai"}</div>
                    </div>
                    <p>{"hello every"}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Channel)

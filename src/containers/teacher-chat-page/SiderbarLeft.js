import React from 'react';
import Channel from './Channel.js';
import { connect } from 'react-redux';
import ReactLoading from "react-loading";
import './SiderbarLeft.css';

class SiderbarLeft extends React.Component {
    type = "spokes";
    render() {
        var channels = this.props.listUsers;
        const loader =
            <div className="loader" key={0}>
                <ReactLoading type="spokes" color="black" height={25} width={25} />
            </div>

        return (
            ((true) ?
                <div className="siderbar-left">
                    <div className="title-member">Messenger </div>
                    <div className="channels">
                        {
                            channels.valueSeq().map((channel, index) => {
                                if (channel.id !== this.props.userId) {
                                    return (
                                        <Channel channel={channel} key={index} ></Channel>
                                    )
                                }
                                return null;
                            })
                        }
                    </div>
                </div>
                :
                <div className="siderbar-left">
                    <div className="title-member">Messenger </div>
                    <div className="channels">
                        <div>{loader}</div>
                    </div>
                </div>
            )
        )
    }
}

const mapStateToProps = (state) => ({
    listUsers: state.messageTeacherReducer.listUsers,
    userId: state.profile._id,
    listUsersOnline: state.messageTeacherReducer.listUsersOnline,

})

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SiderbarLeft)

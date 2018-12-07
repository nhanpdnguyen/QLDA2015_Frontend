import React from 'react';
import Channel from './Channel.js';
import { connect } from 'react-redux';
import lodash from 'lodash';
import ReactLoading from "react-loading";
import './SiderbarLeft.css';

class SiderbarLeft extends React.Component {
    type = "spokes";
    render() {
        var channels = [{}, {}, {}];
        const loader =
        <div className="loader" key={0}>
            <ReactLoading type="spokes" color="black" height={25} width={25}/>
        </div>

        return (
            ((true) ?
                <div className="siderbar-left">
                    <div className="title-member">Messenger </div>
                    <div className="channels">
                        {
                            channels.map((channel, index) => {
                                return (
                                    <Channel key={index} channel={channel}></Channel>
                                );
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

})

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SiderbarLeft)

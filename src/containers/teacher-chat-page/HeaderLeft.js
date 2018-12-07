import React from 'react';
import './HeaderLeft.css';
import { connect } from 'react-redux';

class HeaderLeft extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userNameSearch: ''
        }
    }
    handleSearch = () => {
        // const userNameSearch = this.state.userNameSearch;
        // const channels = this.props.users;

        // var channel =  channels.find((channel) => channel.value.displayName === userNameSearch);
    
        // if(channel){
        //     let payload = {};
        //     payload.activeChannel = channel;
        //     this.props.actionsSetActiveChannel(payload);
        // }
    }

    handleChange = (event) => {
        this.setState({
            userNameSearch: event.target.value
        })
    }
    render() {
        return (
            <div className="header-left">
                <div className="name-user">
                    {"Giáo viên"}
                </div>
                <div className="search">
                    <div className="input-search">
                        <input onKeyUp={(event) => {
                                if (event.key === 'Enter') {
                                        this.handleSearch();
                                    }
                                }}                     
                                onChange={this.handleChange}
                                value={this.state.userNameSearch} placeholder="Search messager..."
                            />
                    </div>
                    <div className="action-search">
                        <button onClick={this.handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLeft)

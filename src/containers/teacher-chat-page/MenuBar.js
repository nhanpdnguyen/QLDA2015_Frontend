import React from 'react';
import { connect } from 'react-redux';
import './MenuBar.css'
import {withRouter} from "react-router-dom";


class MenuBar extends React.Component {

    onLogoutApp = () => {
        this.props.history.push('/');
    }

    handleWindowClose = () => {
        this.props.firebase.logout();
    }

    componentDidMount() {
        window.addEventListener('onbeforeunload', this.handleWindowClose);
    }
    
    componentWillUnmount() {
        window.removeEventListener('onbeforeunload', this.handleWindowClose);
    }

    render() {
        return (
            <div className="menu-bar">
                <div className="menus">
                    <div className="icon-app">
                        <img src="/images/avatar.png" alt="avatar"/>
                        <span className='me-online'></span>
                    </div>

                    <div className="action-logout">
                        <img src= "/images/iconLogOut.png" alt="avatar"onClick={this.onLogoutApp}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuBar))

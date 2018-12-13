import React from 'react';
import { connect } from 'react-redux';
import './HeaderContent.css'
class HeaderContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isStar: false,
        }
    }

    render() {
        const activeChannel = null;

        return (
            (activeChannel !== '' ? 
                <div className="header-content-active">      
                    <div className="profile-userchat-image-active">
                        <img src="./images/avatar.png" alt="avatar" />
                    </div>

                    <div className="profile-username-active">
                        {/* <div>{activeChannel.value.displayName}</div> */}
                        <div>{"tan tai"}</div>
                    </div>          
                </div>
                :
                <div className="header-content">    
                    <div className="profile-userchat-image">
                        {!activeChannel ? null : 
                        <img src="./images/avatar.png" alt="avatar" />}
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


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent)

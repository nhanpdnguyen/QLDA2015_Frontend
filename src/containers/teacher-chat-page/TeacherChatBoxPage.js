import React from 'react';
import './TeacherChatBoxPage.css';
import MenuBar from './MenuBar.js';
import HeaderLeft from './HeaderLeft.js';
import HeaderContent from './HeaderContent.js';
import SiderbarLeft from './SiderbarLeft.js';
import MainMessageContent from './MainMessageContent.js';
import MessageInput from './MessageInput.js';
class TeacherChatBoxPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            height: window.innerHeight,
        }
    }
    onResize = () => {
        this.setState({
            height: window.innerHeight,
        })
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.onresize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    componentDidUpdate(){
    }

    render(){
        const { height } = this.state;
        const style = {
            height:height,
        }

        return(
            <div style={style} className="page-message">
                <MenuBar></MenuBar>
                <div className="page-wrapper">
                    <div className="header-message">
                        <HeaderLeft></HeaderLeft>
                        <HeaderContent></HeaderContent>
                    </div>
                    <div className="main-message">
                        <SiderbarLeft></SiderbarLeft>
                        <div className="main-content">
                            <MainMessageContent></MainMessageContent>
                            <MessageInput></MessageInput>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default TeacherChatBoxPage;  

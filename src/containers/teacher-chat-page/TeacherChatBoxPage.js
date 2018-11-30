import React from 'react';
import './TeacherChatBoxPage.css';
import MenuBar from './MenuBar.js';

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
            </div>
        )
    }
}

export default TeacherChatBoxPage;  

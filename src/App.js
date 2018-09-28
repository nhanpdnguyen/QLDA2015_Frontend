import React, { Component } from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container,
//     Row,
//     Col,
//     Jumbotron,
//     Button
// } from 'reactstrap';
import NavBar from './components/NavBar';

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <NavBar></NavBar>
        );
    }
}

export default App;
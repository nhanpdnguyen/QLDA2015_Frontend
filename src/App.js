import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './views/Home.js';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar'
import './App.css';

const HelloWorld = function (props) {
	return <div>Hello world</div>
}

class App extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Router>
				<div>
					<Header isLoggedIn={true}></Header>
					<NavBar></NavBar>
					<Container fluid id="main-content-container">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/about" component={HelloWorld} />
								<Route component={HelloWorld} />
							</Switch>
					</Container>
					<Footer></Footer>
				</div>
			</Router>
		);
	}
}

export default App;
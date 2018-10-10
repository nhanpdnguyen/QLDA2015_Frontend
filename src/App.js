import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './views/Home.js';
import Header from './components/Header';
import NavBar from './components/NavBar';

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
					<Header></Header>
					<Container fluid>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={HelloWorld} />
							<Route component={HelloWorld} />
						</Switch>
					</Container>
				</div>
			</Router>
		);
	}
}

export default App;
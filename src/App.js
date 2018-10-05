import React, { Component } from 'react';
import Home from './views/Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HelloWorld = function (props){
	return <div>Hello world</div>
}

class App extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={HelloWorld} />
				</Switch>
			</Router>
		);
	}
}

export default App;
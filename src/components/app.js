import { h, Component } from 'preact';

import Home from './home';
import ReactGA from 'react-ga';

// Initialize React Google Analytics
ReactGA.initialize('UA-140876731-2');

export default class App extends Component {

	componentDidMount() {
		// Initialize Page View
		ReactGA.pageview('/')
	}

	render() {
		return (
			<div id="app">
				<Home />
			</div>
		);
	}
}

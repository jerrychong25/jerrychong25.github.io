import { h, Component } from 'preact';

import Home from './home';
import ReactGA from 'react-ga';

export default class App extends Component {

	componentDidMount() {
		// Initialize React Google Analytics
		ReactGA.initialize('UA-140876731-2', { testMode: true });
	}

	render() {
		return (
			<div id="app">
				<Home />
			</div>
		);
	}
}

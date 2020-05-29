import { h, Component } from 'preact';

import Home from './home';
import analytics from './analytics'

export default class App extends Component {

	componentDidMount() {
		// Basic page tracking
		analytics.page()
		// Basic event tracking
		analytics.track('mainPage')
		// Basic user id identify
		analytics.identify('visitor')
	}

	render() {
		return (
			<div id="app">
				<Home />
			</div>
		);
	}
}

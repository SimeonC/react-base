import React, {Component} from 'react';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from '../layouts/App.jsx';

export default class RootRouter extends Component {
	constructor(props) {
		super(props);
		this.routeConfig = [
			{
				path: '/',
				component: App,
				childRoutes: []
			}
		];
	}

	render() {
		let history = syncHistoryWithStore(browserHistory, this.props.store);
		return (
			<Router history={history} routes={this.routeConfig}>
			</Router>
		);
	};
}

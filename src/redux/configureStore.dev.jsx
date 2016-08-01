import {createStore, applyMiddleware, compose} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import { routerMiddleware } from 'react-router-redux'

import {persistState} from 'redux-devtools';
import thunk from 'redux-thunk';

let axiosInstance = axios.create({
});


function getDebugSessionKey() {
	// You can write custom logic here!
	// By default we try to read the key from ?debug_session=<key> in the address bar
	const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
	return (matches && matches.length > 0) ? matches[1] : null;
}

export default function preconfig(reducer, browserHistory) {
	const finalCreateStore = compose(
		applyMiddleware(thunk, axiosMiddleware(axiosInstance), routerMiddleware(browserHistory)),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
		persistState(getDebugSessionKey())
	)(createStore);
	return (initialState) => {
		const store = finalCreateStore(reducer, initialState);
		// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
		if (module.hot) {
			module.hot.accept('./reducers', () =>
				store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
			);
		}
		
		return store;
	};
};

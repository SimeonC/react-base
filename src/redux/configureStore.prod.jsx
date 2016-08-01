import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

let axiosInstance = axios.create({
});


export default function preconfig(reducer, browserHistory) {
	const finalCreateStore = compose(
		applyMiddleware(thunk, axiosMiddleware(axiosInstance), routerMiddleware(browserHistory))
	)(createStore);
	return (initialState) => {
		finalCreateStore(reducer, initialState);
	};
};

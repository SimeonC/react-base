// Use ProvidePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.
import {combineReducers} from 'redux';
import rootReducer from './reducers';
import * as Events from './events.jsx';

let appReducer = combineReducers(rootReducer);

function buildReducer(cleanupFunction) {
	return (state, action) => {
		// On logout return everything to the initialState
		if (action.type === Events.LOGOUT) {
			state = undefined;
		}
		state = appReducer(state, action);
		
		if (action.type === Events.SSO_COMPLETE) {
			// Drop this in the timeout to get us out of the dispatch/render call
			setTimeout(() => cleanupFunction(action.complete), state.modal.is ? 500 : 1);
			if (state.modal.is) {
				state = {
					...state,
					modal: {...state.modal, open: false}
				};
			}
		}
		return state;
	};
}
export default (cleanupFunction, browserHistory) => {
	let configureStore;
	if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
		configureStore = require('./configureStore.prod.jsx').default(buildReducer(cleanupFunction), browserHistory);
	} else {
		configureStore = require('./configureStore.dev.jsx').default(buildReducer(cleanupFunction), browserHistory);
	}
	return configureStore();
};

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootRouter from './RootRouter.jsx';
import {StyleRoot} from 'radium';
import GlobalStyles from '../styles/global.jsx';

export default class Root extends Component {
	render() {
		const { store } = this.props;
		return <StyleRoot>
			<GlobalStyles/>
			<Provider store={store}>
				<RootRouter store={store} />
			</Provider>
		</StyleRoot>;
	}
}

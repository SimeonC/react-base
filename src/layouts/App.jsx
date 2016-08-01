import React, {Component, PropTypes} from 'react';
import GlobalTranslation from '../components/GlobalTranslations.jsx';

export default class App extends Component {
	render() {
		return <p><GlobalTranslation id='HelloWorld'/></p>;
	};
}

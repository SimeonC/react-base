import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {addLocaleData, IntlProvider} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import configureStore from './redux/configureStore'

import Root from './components/Root.jsx';

require("font-awesome-webpack");

addLocaleData(enLocaleData);

const store = configureStore();

window.App = {
	translations: {
		// using defaultLocale - this means changes to en-NZ don't matter and we don't need it. This is just for reference when we need to add more translations.
		// 'en-NZ': require('./locales/en-NZ.json')
	},
	locale: 'en'
};

let intlFormats = {
	number: {
		'NZD': {
			style: 'currency',
			currency: 'NZD',
			minimumFractionDigits: 2
		}
	},
	date: {
		'short': {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
			timeZone: 'UTC'
		},
		'medium': {
			weekday: 'short',
			day: '2-digit',
			month: 'long',
			year: 'numeric',
			timeZone: 'UTC'
		},
		'long': {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			timeZone: 'UTC'
		}
	}
};

let bootstrapElement = document.createElement('div');
document.body.appendChild(bootstrapElement);

ReactDOM.render(
	<IntlProvider locale={window.App.locale} defaultLocale="en" messages={window.App.translations[window.App.locale]}
				  formats={intlFormats} defaultFormats={intlFormats}>
		<Root store={store}/>
	</IntlProvider>,
	bootstrapElement
);

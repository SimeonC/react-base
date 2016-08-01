import React from 'react';
import {addLocaleData, IntlProvider} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

addLocaleData(enLocaleData);

let intlFormats = {
	number: {
		'NZD': {
			style: 'currency',
			currency: 'NZD',
			minimumFractionDigits: 2
		},
		'percentage': {
			style: 'percent',
			maximumFractionDigits: 2
		}
	},
	date: {
		'short': {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		},
		'medium': {
			weekday: 'short',
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		},
		'long': {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		}
	}
};


export default function storyIntlSetup(storybookInstance) {
	return storybookInstance.addDecorator((story) => <IntlProvider
		defaultLocale="en-NZ"
		locale="en-NZ"
		formats={intlFormats}
	>
	<div>
		{story()}
		</div>
	</IntlProvider>)

}

/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from 'react';
import {IntlProvider, intlShape} from 'react-intl';
import {mount, shallow} from 'enzyme';

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
const messages = {};

// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({defaultLocale: 'en', locale: 'en', messages}, {});
const {intl} = intlProvider.getChildContext();

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node) {
	return React.cloneElement(node, {intl});
}

export function shallowWithIntl(node, {context}) {
	return shallow(
		nodeWithIntlProp(node),
		{
			context: Object.assign({}, context, {intl}),
		}
	);
}

export function mountWithIntl(node, {context, childContextTypes}) {
	return mount(
		nodeWithIntlProp(node),
		{
			context: Object.assign({}, context, {intl}),
			childContextTypes: Object.assign({}, {intl: intlShape}, childContextTypes)
		}
	);
}

let store = {
	getState: () => {},
	dispatch: () => {}
};

function nodeWithStoreProp(node) {
	return React.cloneElement(node, {store});
}

export function shallowWithStore(node, {context}) {
	return shallow(
		nodeWithStoreProp(node),
		{
			context: Object.assign({}, context, {store})
		}
	);
}

export function mountWithStore(node, {context, childContextTypes}) {
	return mount(
		nodeWithStoreProp(node),
		{
			context: Object.assign({}, context, {store}),
			childContextTypes: Object.assign({}, {store: React.PropTypes.object}, childContextTypes)
		}
	);
}

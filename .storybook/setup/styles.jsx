import React from 'react';
import GlobalStyles from '../../src/styles/global.jsx';
import {StyleRoot} from 'radium';

export default function storyStyleSetup(storybookInstance) {
	return storybookInstance.addDecorator(story => <StyleRoot>
			<style>{`body {margin: 0;}`}</style>
			<GlobalStyles/>
			{story()}
		</StyleRoot>)
}

import React, {Component} from 'react';
import Radium, {Style} from 'radium';

class GlobalStyles extends Component {
	render() {
		return <Style scopeSelector=".AstroAirlock" rules={{
			'*': {
				boxSizing: 'border-box'
			},
			'.Button:disabled': {
				opacity: '.5',
				cursor: 'not-allowed !important'
			},
			'.Overlay-appear > div:first-child': {
				opacity: '0 !important',
				transition: 'opacity 0.4s ease-in-out'
			},
			// example of using ReactCSSTransitionGroup animations
			'.Overlay-appear > div:last-child': {
				opacity: '0 !important',
				transform: 'translateY(-50%)',
				transition: 'all 0.4s ease-in-out'
			},
			'.Overlay-appear-active > div:first-child': {
				opacity: '0.875 !important'
			},
			'.Overlay-appear-active > div:last-child': {
				opacity: '1 !important',
				transform: 'translateY(0%)'
			},
			'.Overlay-leave > div:first-child': {
				opacity: '0.875 !important',
				transition: 'opacity 0.4s ease-in-out'
			},
			'.Overlay-leave > div:last-child': {
				opacity: '1 !important',
				transform: 'translateY(0%)',
				transition: 'all 0.4s ease-in-out'
			},
			'.Overlay-leave-active > div:first-child': {
				opacity: '0 !important'
			},
			'.Overlay-leave-active > div:last-child': {
				opacity: '0 !important',
				transform: 'translateY(-50%)'
			}
		}}/>;
	}
}
export default Radium(GlobalStyles);

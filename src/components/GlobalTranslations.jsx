import React from 'react';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
	HelloWorld: {id: "globals.HelloWorld", defaultMessage: "Hello World"},
});

class GlobalTranslation extends React.Component {
	static propTypes = {
		id: React.PropTypes.string.isRequired
	};

	render() {
		if (!this.props.id || !messages[this.props.id]) {
			throw new Error("No message defined for '" + this.props.id + "'");
		}
		let {intl, id, ..._props} = this.props;
		return <span {..._props}>{intl.formatMessage(messages[id])}</span>;
	};
}

export default injectIntl(GlobalTranslation);

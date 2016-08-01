import * as Events from '../events.jsx'

export const defaultValues = {
	eventCount: 0
};

export default function defaultReducer(state = defaultValues, action) {
	switch (action.type) {
		case Events.EVENT:
			return {
				eventCount: state.eventCount + 1
			};
		default:
			return state;
	}
};

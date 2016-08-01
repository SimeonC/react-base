const baseColors = {
	black: '#111',
	white: '#fff',
	gray: '#ddd',
	midgray: '#888',
	lightgray: '#DDD',
	blue: '#08e',
	red: '#f52',
	orange: '#f70',
	green: '#1c7'
};

const colors = {
	...baseColors,
	primary: '#EC5032',
	secondary: baseColors.lightgray,
	default: baseColors.white,
	info: baseColors.blue,
	success: baseColors.green,
	warning: baseColors.orange,
	error: baseColors.red,
	background: '#F6F6F6',
	border: '#E6E6E6',
	text: baseColors.black
};

export function configTheme(config) {
	let _colors = {
		...colors,
		background: config.backgroundColor || colors.background,
		border: config.borderColor || colors.border,
		text: config.textColor || colors.text
	};
	
	let panelStyle = {
		backgroundColor: _colors.background,
		borderColor: _colors.border,
		borderWidth: 1,
		borderStyle: 'solid',
		color: _colors.text
	};
	
	return {
		...baseTheme,
		colors: _colors,
		Panel: panelStyle,
		PanelFooter: {
			...panelStyle,
			padding: 14,
			borderBottom: '0',
			borderLeft: '0',
			borderRight: '0'
		},
		PanelHeader: panelStyle,
		NavItem: {
			...baseTheme.NavItem,
			color: config.themeColor || _colors.primary
		}
	};
}

const fontSizes = [
	  36,
	  24,
	  20,
	  16,
	  14,
	  12,
	  10
	];

export const baseTheme = {
	colors,
	fontSizes,
	Toolbar: {
		backgroundColor: 'rgba(0,0,0,0)',
		padding: '12px 50px'
	},
	NavItem: {
		fontWeight: 'normal',
		fontSize: fontSizes[4]
	},
	Label: {
		fontWeight: 'normal'
	},
	Input: {
		textAlign: 'left',
		input: {
			backgroundColor: 'white'
		}
	},
	Button: {
		border: 0,
		padding: '12px 36px',
		textTransform: 'uppercase',
		fontWeight: 'normal',
		fontSize: fontSizes[4]
	}
};

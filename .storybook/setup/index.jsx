import intl from './intl.jsx';
import styles from './styles.jsx';

export default function storySetup(storybookInstance) {
	return styles(intl(storybookInstance));
}

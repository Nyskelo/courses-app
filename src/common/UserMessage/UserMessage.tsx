import { TypeUserMessage } from '../../types/types';

import styles from './UserMessage.module.css';

const UserMessage = ({ text = '', ...props }: TypeUserMessage): JSX.Element => {
	return (
		<p className={styles[props.messageType]}>
			{text} {props.children}
		</p>
	);
};

export default UserMessage;

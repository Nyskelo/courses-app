import { TypeUserMessage } from '../../types/types';

import styles from './UserMessage.module.css';

const UserMessage: React.FC<TypeUserMessage> = ({ text = '', ...props }) => {
	return (
		<p className={styles[props.messageType]}>
			{text} {props.children}
		</p>
	);
};

export default UserMessage;

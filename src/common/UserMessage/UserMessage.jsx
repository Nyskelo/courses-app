import React from 'react';

import styles from './UserMessage.module.css';

const UserMessage = ({ children, messageType }) => {
	return <p className={styles[messageType]}>{children}</p>;
};

export default UserMessage;

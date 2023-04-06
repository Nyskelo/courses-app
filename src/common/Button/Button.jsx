import React from 'react';

import styles from './Button.module.css';

const Button = ({ text, buttonStyles, width, ...props }) => {
	return (
		<>
			<button className={styles.button} {...props}>
				{text}
			</button>
		</>
	);
};

export default Button;

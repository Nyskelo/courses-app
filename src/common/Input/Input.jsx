import React from 'react';

import styles from './Input.module.css';

const Input = ({ labelVisibility, labelText, name, ...props }) => {
	return (
		<div>
			<label htmlFor={name} className={styles[labelVisibility]}>
				{labelText}
			</label>
			<input className={styles.input} {...props} id={name} name={name} />
		</div>
	);
};

export default Input;

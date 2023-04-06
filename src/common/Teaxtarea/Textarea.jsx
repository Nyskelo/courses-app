import React from 'react';

import styles from './Textarea.module.css';

const Textarea = ({ name, labelVisibility, labelText, ...props }) => {
	return (
		<>
			<label htmlFor={name} className={styles[labelVisibility]}>
				{labelText}
			</label>
			<textarea
				className={styles.textarea}
				{...props}
				id={name}
				name={name}
			></textarea>
		</>
	);
};

export default Textarea;

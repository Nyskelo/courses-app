import React from 'react';

import Textarea from '../../../../common/Teaxtarea/Textarea';

import styles from './AddDescriptions.module.css';

const AddDescriptions = ({ value, onChange }) => {
	return (
		<div className={styles.wrapper}>
			<Textarea
				type='text'
				placeholder='Enter description...'
				name='description'
				labelText='Description'
				labelVisibility='display'
				value={value}
				onChange={onChange}
				rows='5'
			/>
		</div>
	);
};

export default AddDescriptions;

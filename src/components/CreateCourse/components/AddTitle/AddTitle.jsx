import React from 'react';

import Input from '../../../../common/Input/Input';

import styles from './AddTitle.module.css';

const AddTitle = ({ value, onChange }) => {
	return (
		<>
			<div className={styles.wrapper}>
				<Input
					type='text'
					placeholder='Enter title...'
					value={value}
					onChange={onChange}
					visibility='display'
					labelText='Title'
					name='title'
				/>
			</div>
		</>
	);
};

export default AddTitle;

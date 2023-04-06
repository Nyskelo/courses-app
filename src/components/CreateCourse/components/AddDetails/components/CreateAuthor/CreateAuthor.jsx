import React from 'react';

import Input from '../../../../../../common/Input/Input';
import Button from '../../../../../../common/Button/Button';
import UserMessage from '../../../../../../common/UserMessage/UserMessage';

import styles from './CreateAuthor.module.css';

const CreateAuthor = ({ value, onChange, onClick, title }) => {
	return (
		<div className={styles.form}>
			<h1 className={styles.title}>Author</h1>
			<Input
				type='text'
				placeholder='Enter author name...'
				value={value}
				onChange={onChange}
				visibility='display'
				labelText='Author name'
				name='author-name'
			/>
			{title.error && (
				<UserMessage messageType='error'>{title.message}</UserMessage>
			)}
			<div className={styles.button__wrapper}>
				<Button
					width='large'
					type='button'
					text='Create author'
					onClick={onClick}
				/>
			</div>
		</div>
	);
};

export default CreateAuthor;

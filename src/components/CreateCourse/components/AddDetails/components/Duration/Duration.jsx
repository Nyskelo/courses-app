import React from 'react';
import UserMessage from '../../../../../../common/UserMessage/UserMessage';
import Input from '../../../../../../common/Input/Input';

import styles from './Duration.module.css';

const Duration = ({ value, onChange, duration, hours }) => {
	return (
		<section>
			<h1 className={styles.title}>Duration</h1>
			<Input
				type='text'
				placeholder='Enter duration in minutes...'
				value={value}
				onChange={onChange}
				visibility='display'
				labelText='Duration'
				name='duration'
			/>
			{duration.error && (
				<UserMessage messageType='error'>{duration.message}</UserMessage>
			)}
			<p>
				Duration: <span className={styles.hours}>{hours}</span> hours
			</p>
		</section>
	);
};

export default Duration;

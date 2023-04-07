import UserMessage from '../../../../../../common/UserMessage/UserMessage';
import Input from '../../../../../../common/Input/Input';

import { TypeDuration } from '../../../../../../types/types';

import styles from './Duration.module.css';

const Duration = ({ ...props }: TypeDuration): JSX.Element => {
	return (
		<section>
			<h1 className={styles.title}>Duration</h1>

			<Input
				type='text'
				placeholder='Enter duration in minutes...'
				value={props.value}
				onChange={props.onChange}
				labelVisibility='display'
				labelText='Duration'
				name='duration'
			/>

			{props.duration.error && (
				<UserMessage messageType='error' text={props.duration.message} />
			)}

			<p>
				Duration: <span className={styles.hours}>{props.hours}</span> hours
			</p>
		</section>
	);
};

export default Duration;

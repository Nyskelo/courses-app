import Input from '../../../../../../common/Input/Input';
import Button from '../../../../../../common/Button/Button';
import UserMessage from '../../../../../../common/UserMessage/UserMessage';

import { TypeCreateAuthor } from '../../../../../../types/types';

import styles from './CreateAuthor.module.css';

const CreateAuthor: React.FC<TypeCreateAuthor> = ({ ...props }) => {
	return (
		<div className={styles.form}>
			<h1 className={styles.title}>Author</h1>

			<Input
				type='text'
				placeholder='Enter author name...'
				value={props.value}
				onChange={props.onChange}
				visibility='display'
				labelVisibility='display'
				labelText='Author name'
				name='author-name'
			/>

			{props.checkName.error && (
				<UserMessage text={props.checkName.message} messageType='error' />
			)}

			<div className={styles.button__wrapper}>
				<Button
					width='large'
					type='button'
					text='Create author'
					onClick={props.onClick}
				/>
			</div>
		</div>
	);
};

export default CreateAuthor;

import Textarea from '../../../../common/Teaxtarea/Textarea';

import { TypeAddDescriptions } from '../../../../types/types';

import styles from './AddDescriptions.module.css';

const AddDescriptions = ({ ...props }: TypeAddDescriptions): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Textarea
				type='text'
				placeholder='Enter description...'
				name='description'
				labelText='Description'
				labelVisibility='display'
				value={props.value}
				onChange={props.onChange}
				rows='5'
			/>
		</div>
	);
};

export default AddDescriptions;

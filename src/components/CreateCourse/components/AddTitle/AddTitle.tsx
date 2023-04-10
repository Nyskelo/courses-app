import Input from '../../../../common/Input/Input';

import { TypeAddTitle } from '../../../../types/types';

import styles from './AddTitle.module.css';

const AddTitle: React.FC<TypeAddTitle> = ({ value, onChange }): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Input
				type='text'
				placeholder='Enter title...'
				value={value}
				onChange={onChange}
				labelVisibility='display'
				labelText='Title'
				name='title'
			/>
		</div>
	);
};

export default AddTitle;

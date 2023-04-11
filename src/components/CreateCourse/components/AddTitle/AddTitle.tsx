import Input from 'common/Input/Input';

import { TypeAddTitle } from 'types/types';

import styles from './AddTitle.module.css';

const AddTitle: React.FC<TypeAddTitle> = ({ ...props }) => {
	return (
		<div className={styles.wrapper}>
			<Input
				type='text'
				placeholder='Enter title...'
				value={props.newCourse.title}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					props.setNewCourse((prev) => ({ ...prev, title: e.target.value }))
				}
				labelVisibility='display'
				labelText='Title'
				name='title'
			/>
		</div>
	);
};

export default AddTitle;

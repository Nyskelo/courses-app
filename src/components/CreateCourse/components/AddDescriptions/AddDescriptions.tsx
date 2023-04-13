import Textarea from 'common/Teaxtarea/Textarea';

import { TypeAddDescriptions } from 'types/types';

import styles from './AddDescriptions.module.css';

const AddDescriptions: React.FC<TypeAddDescriptions> = ({ ...props }) => {
	return (
		<div className={styles.wrapper}>
			<Textarea
				type='text'
				placeholder='Enter description...'
				name='description'
				labelText='Description'
				labelVisibility='display'
				value={props.newCourse.description}
				onChange={(e) =>
					props.setNewCourse((prev) => ({
						...prev,
						description: e.target.value,
					}))
				}
				rows='5'
			/>
		</div>
	);
};

export default AddDescriptions;

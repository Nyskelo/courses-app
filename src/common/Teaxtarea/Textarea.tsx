import { TypeTextarea } from '../../types/types';

import styles from './Textarea.module.css';

const Textarea = ({
	name,
	labelVisibility,
	labelText,
	...props
}: TypeTextarea): JSX.Element => {
	return (
		<>
			<label htmlFor={name} className={styles[labelVisibility]}>
				{labelText}
			</label>
			<textarea
				className={styles.textarea}
				{...props}
				id={name}
				name={name}
			></textarea>
		</>
	);
};

export default Textarea;

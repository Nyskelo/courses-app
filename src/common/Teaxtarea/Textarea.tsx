import { TypeTextarea } from 'types/types';

import styles from './Textarea.module.css';

const Textarea: React.FC<TypeTextarea> = ({
	name,
	labelVisibility,
	labelText,
	...props
}) => {
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

import { TypeInput } from '../../types/types';

import styles from './Input.module.css';

const Input: React.FC<TypeInput> = ({
	name,
	labelText,
	labelVisibility,
	...props
}) => {
	return (
		<div>
			<label htmlFor={name} className={styles[labelVisibility]}>
				{labelText}
			</label>
			<input className={styles.input} {...props} id={name} name={name} />
		</div>
	);
};

export default Input;

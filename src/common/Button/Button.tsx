import { TypeButton } from 'types/types';

import styles from './Button.module.css';

const Button: React.FC<TypeButton> = ({ ...props }) => {
	return (
		<button className={`${styles.button} ${styles[props.width]}`} {...props}>
			{props.text}
		</button>
	);
};

export default Button;

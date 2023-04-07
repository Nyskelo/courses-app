import { TypeButton } from '../../types/types';

import styles from './Button.module.css';

const Button = ({ ...props }: TypeButton): JSX.Element => {
	return (
		<button className={`${styles.button} ${styles[props.width]}`} {...props}>
			{props.text}
		</button>
	);
};

export default Button;

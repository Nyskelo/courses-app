import Button from 'common/Button/Button';

import { TypeAuthor } from 'types/types';
import { addAuthor, deleteAuthor } from 'store/authors/authorsCreators';
import { useAppDispatch } from 'store/storeTypes';

import styles from './Author.module.css';

const Author: React.FC<TypeAuthor> = ({ ...props }) => {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		if (props.text === 'Add author') {
			dispatch(addAuthor(props.author));
		} else {
			dispatch(deleteAuthor(props.author));
		}
	};

	return (
		<div className={styles.element} data-testid='author'>
			<h3>{props.name}</h3>

			<Button
				width='large'
				type='button'
				onClick={handleClick}
				text={props.text}
				name={props.id}
			/>
		</div>
	);
};
export default Author;

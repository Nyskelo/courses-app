import React from 'react';

import Button from '../../../../../../../../common/Button/Button';

import { TypeAuthor } from '../../../../../../../../types/types';

import styles from './Author.module.css';

const Author = ({ ...props }: TypeAuthor): JSX.Element => {
	return (
		<div className={styles.element}>
			<h3>{props.name}</h3>

			<Button
				width='large'
				type='button'
				onClick={props.onClick}
				text={props.text}
			/>
		</div>
	);
};
export default Author;

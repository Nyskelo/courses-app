import React from 'react';

import Button from '../../../../../../../../common/Button/Button';

import styles from './Author.module.css';

const Author = ({ name, onClick, text }) => {
	return (
		<>
			<div className={styles.element}>
				<h3>{name}</h3>
				<Button width='large' type='button' onClick={onClick} text={text} />
			</div>
		</>
	);
};
export default Author;

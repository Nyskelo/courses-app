import React from 'react';

import styles from './Item.module.css';

const DetailsItem = (props) => {
	return (
		<section className={styles.wrapper}>
			<h4>{props.title}</h4>
			<p className={styles.text_ellipsis}>{props.value}</p>
		</section>
	);
};

export default DetailsItem;

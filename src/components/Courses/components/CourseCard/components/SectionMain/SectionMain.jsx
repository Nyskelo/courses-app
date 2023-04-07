import React from 'react';

import styles from './SectionMain.module.css';

const SectionMain = ({ title, description }) => {
	return (
		<section>
			<h1 className={styles.title}>{title}</h1>
			<p>{description}</p>
		</section>
	);
};

export default SectionMain;

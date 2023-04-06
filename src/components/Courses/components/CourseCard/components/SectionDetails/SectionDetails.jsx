import React from 'react';

import styles from './SectionDetails.module.css';

const SectionDetails = ({ children }) => (
	<div className={styles.wrapper}>{children}</div>
);

export default SectionDetails;

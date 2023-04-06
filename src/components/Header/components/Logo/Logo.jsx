import React from 'react';

import logo from './courses-logo.png';

import styles from '../../Header.module.css';

const Logo = () => {
	return <img className={styles.logo} src={logo} alt='' />;
};

export default Logo;

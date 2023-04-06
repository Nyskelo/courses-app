import React from 'react';

import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.wrapper}>
			<Logo />
			<h4 className={styles.name}>Dave</h4>
			<Button width='small' text='Logout' />
		</header>
	);
};

export default Header;

import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import UserMessage from '../../common/UserMessage/UserMessage';
import { Logo } from './components/Logo/Logo';

import { TypeHeader } from '../../types/types';

import styles from './Header.module.css';
import { useEffect } from 'react';

const Header: React.FC<TypeHeader> = ({ ...props }): JSX.Element => {
	const navigate = useNavigate();

	const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		localStorage.removeItem('USER');
		props.setUser({ ...props.user, isLoggedIn: false });
		navigate('/login');
	};

	useEffect(() => {
		localStorage.getItem('USER') && navigate('/courses');

		!props.user.isLoggedIn &&
			!localStorage.getItem('USER') &&
			navigate('/registration');
	}, []);

	return (
		<header className={styles.wrapper}>
			<Logo />

			{props.user.isLoggedIn && (
				<>
					<UserMessage
						messageType='userName'
						text={props.user && props.user.name}
					/>
					<Button width='small' text='Logout' onClick={logout} />
				</>
			)}
		</header>
	);
};

export default Header;

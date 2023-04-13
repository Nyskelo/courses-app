import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'common/Button/Button';
import UserMessage from 'common/UserMessage/UserMessage';
import { Logo } from './components/Logo/Logo';

import { getUser, useAppDispatch, useAppSelector } from 'store/storeTypes';
import { tokenName } from 'store/user/userTypes';
import { loginUser, logoutUser } from 'services';

import styles from './Header.module.css';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector(getUser);

	const token = localStorage.getItem(tokenName.USER);

	const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(logoutUser());
	};

	useEffect(() => {
		!user.isAuth && !token && navigate('/login');
	}, [user.isAuth]);

	useEffect(() => {
		dispatch(loginUser());

		!user.isAuth && !token && navigate('/registration');

		token && navigate('/courses');
	}, []);

	return (
		<header className={styles.wrapper}>
			<Logo />

			{user.isAuth && (
				<>
					<UserMessage messageType='userName' text={user && user.name} />
					<Button width='small' text='Logout' onClick={logout} />
				</>
			)}
		</header>
	);
};

export default Header;

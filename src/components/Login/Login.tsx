import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'common/Button/Button';
import Input from 'common/Input/Input';
import UserMessage from 'common/UserMessage/UserMessage';

import { ERROR } from '../../constants';
import { tokenName } from 'store/user/userTypes';
import { formValidation } from 'helpers';
import { getUser, useAppDispatch, useAppSelector } from 'store/storeTypes';
import { loginUser } from 'services';

import styles from './Login.module.css';

const Login = () => {
	const user = useAppSelector(getUser);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [logUser, setLogUser] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formValidation(logUser, ERROR.msg_1)) return;
		dispatch(loginUser(logUser));
	};

	useEffect(() => {
		if (user.isAuth) {
			localStorage.setItem(tokenName.USER, `${user.token}`);
			navigate('/courses');
		}
	}, [user.isAuth]);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h1>Login</h1>

			<Input
				type='email'
				labelText='Email'
				labelVisibility='display'
				placeholder='Enter email'
				value={logUser.email}
				name='login'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setLogUser({ ...logUser, email: e.target.value })
				}
			/>
			<Input
				type='password'
				labelText='Password'
				labelVisibility='display'
				placeholder='Enter password'
				value={logUser.password}
				name='password'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setLogUser({ ...logUser, password: e.target.value })
				}
			/>
			<Button width='medium' type='submit' text='Login' />

			<UserMessage messageType='info' text='If you not have an account you can'>
				<Link to='/registration'>Registration</Link>
			</UserMessage>
		</form>
	);
};

export default Login;

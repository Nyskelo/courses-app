import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import UserMessage from '../../common/UserMessage/UserMessage';
import Loading from '../../common/Loading/Loading';

import { useFetch } from '../../hooks/index';
import { formValidation } from '../../helpers';
import { TypeLogin } from '../../types/types';

import styles from './Login.module.css';

const Login: React.FC<TypeLogin> = ({ ...props }) => {
	const navigate = useNavigate();

	const dataUser = {
		name: props.user.name,
		email: props.user.email,
		password: props.user.password,
	};
	const [login, setLogin] = useState({
		email: props.user.email,
		password: props.user.password,
	});

	const tokenUser = useFetch({
		method: 'post',
		url: 'http://localhost:4000/login',
		body: dataUser,
		auth: { username: '', password: login.password },
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!formValidation(login)) return;

		props.setUser({
			...props.user,
			...login,
		});
		tokenUser.setStart(true);
	};

	useEffect(() => {
		if (tokenUser.status === 201) {
			localStorage.setItem('USER', `${tokenUser.data}`);
			localStorage.setItem('NAME', JSON.stringify(dataUser.name));
			props.setUser({ ...props.user, isLoggedIn: true });
			navigate('/courses');
		}
	}, [tokenUser, navigate, props.user, props.setUser]);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			{tokenUser.loading && <Loading />}

			<h1>Login</h1>

			<Input
				type='email'
				labelText='Email'
				labelVisibility='display'
				placeholder='Enter email'
				value={login.email}
				name='login'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setLogin({ ...login, email: e.target.value })
				}
			/>
			<Input
				type='password'
				labelText='Password'
				labelVisibility='display'
				placeholder='Enter password'
				value={login.password}
				name='password'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setLogin({ ...login, password: e.target.value })
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

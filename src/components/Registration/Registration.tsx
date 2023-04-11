import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'common/Button/Button';
import Input from 'common/Input/Input';
import UserMessage from 'common/UserMessage/UserMessage';

import { ERROR } from '../../constants';
import { formValidation } from 'helpers';
import { getUser, useAppSelector, useAppDispatch } from 'store/storeTypes';
import { registerUser } from 'services';

import styles from './Registration.module.css';

const Registration = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(getUser);
	const navigate = useNavigate();

	const [regUser, setRegUser] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!formValidation(regUser, ERROR.msg_2)) {
			return false;
		}
		dispatch(registerUser(regUser));
	};

	useEffect(() => {
		if (user.email) {
			navigate('/login');
		}
	}, [user.email]);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h1>Registration</h1>

			<Input
				type='text'
				labelText='Name'
				labelVisibility='display'
				placeholder='Enter name'
				name='name'
				value={regUser.name}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setRegUser({ ...regUser, name: e.target.value })
				}
			/>

			<Input
				type='email'
				labelText='Email'
				labelVisibility='display'
				placeholder='Enter email'
				name='email'
				value={regUser.email}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setRegUser({ ...regUser, email: e.target.value })
				}
			/>

			<Input
				type='password'
				labelText='Password'
				labelVisibility='display'
				placeholder='Enter password'
				name='password'
				value={regUser.password}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setRegUser({ ...regUser, password: e.target.value })
				}
			/>
			<Button width='medium' type='submit' text='Registration' />

			<UserMessage messageType='info' text={'If you have an account you can'}>
				<Link to='/login'>Login</Link>
			</UserMessage>
		</form>
	);
};

export default Registration;

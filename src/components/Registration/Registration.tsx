import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import UserMessage from '../../common/UserMessage/UserMessage';
import Loading from '../../common/Loading/Loading';

import { useFetch } from '../../hooks/index';
import { formValidation } from '../../helpers';
import { TypeRegistration } from '../../types/types';

import styles from './Registration.module.css';

const Registration: React.FC<TypeRegistration> = ({ ...props }) => {
	const navigate = useNavigate();

	const dataUser = {
		name: props.user.name,
		email: props.user.email,
		password: props.user.password,
	};

	const userToFetch = useFetch({
		method: 'post',
		url: 'http://localhost:4000/register',
		body: dataUser,
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (formValidation(dataUser, 'Please fill in valid data.')) {
			userToFetch.setStart(true);
		}
	};

	useEffect(() => {
		if (userToFetch.status === 201) {
			navigate('/login');
		}
	}, [userToFetch.status]);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			{userToFetch.loading && <Loading />}

			<h1>Registration</h1>

			<Input
				type='text'
				labelText='Name'
				labelVisibility='display'
				placeholder='Enter name'
				name='name'
				value={props.user.name}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					props.setUser({ ...props.user, name: e.target.value })
				}
			/>

			<Input
				type='email'
				labelText='Email'
				labelVisibility='display'
				placeholder='Enter email'
				name='email'
				value={props.user.email}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					props.setUser({ ...props.user, email: e.target.value })
				}
			/>

			<Input
				type='password'
				labelText='Password'
				labelVisibility='display'
				placeholder='Enter password'
				name='password'
				value={props.user.password}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					props.setUser({ ...props.user, password: e.target.value })
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

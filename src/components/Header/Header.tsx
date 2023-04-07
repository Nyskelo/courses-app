import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';
import UserMessage from '../../common/UserMessage/UserMessage';
import { Logo } from './components/Logo/Logo';

import { TypeHeader } from '../../types/types';

import styles from './Header.module.css';

const Header = ({ ...props }: TypeHeader): JSX.Element => {
	const navigate = useNavigate();

	const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		localStorage.removeItem(props.user.email);
		props.setUser({ ...props.user, isLoggedIn: false });
		navigate('/login');
	};

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

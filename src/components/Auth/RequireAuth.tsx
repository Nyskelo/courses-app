import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getUser, useAppSelector } from 'store/storeTypes';
import { tokenName } from 'store/user/userTypes';

const RequireAuth = () => {
	const user = useAppSelector(getUser);
	const token = localStorage.getItem(tokenName.USER);

	useEffect(() => {
		localStorage.getItem(tokenName.USER) && <Navigate to='/courses' />;

		!user.isAuth && !token && <Navigate to='/registration' />;
	}, []);

	return <Outlet />;
};

export default RequireAuth;

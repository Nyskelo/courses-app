import { Navigate, Outlet } from 'react-router-dom';
import { getUser, useAppSelector } from 'store/storeTypes';

const PrivateRoute = () => {
	const user = useAppSelector(getUser);
	return user.role === 'admin' ? <Outlet /> : <Navigate to='/courses' />;
};

export default PrivateRoute;

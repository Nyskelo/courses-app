import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Loading from './common/Loading/Loading';
import RequireAuth from './components/Auth/RequireAuth';
import CourseForm from 'components/CourseForm/CourseForm';

import { getStatus, useAppSelector } from './store/storeTypes';
import { status } from './store/state/stateTypes';
import PrivateRoute from 'components/PrivateRouter/PrivateRouter';

const App = () => {
	const isLoading = useAppSelector(getStatus);

	return (
		<Router>
			<Header />
			{isLoading === status.LOADING && <Loading />}

			<Routes>
				<Route path='/login' element={<Login />} />

				<Route path='/registration' element={<Registration />} />

				<Route element={<RequireAuth />}>
					<Route path='/courses/:courseId' element={<CourseInfo />} />
					<Route path='/courses' element={<Courses />} />

					<Route path='/' element={<PrivateRoute />}>
						<Route path='/courses/add' element={<CourseForm />} />
						<Route path='/courses/update/:courseId' element={<CourseForm />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;

import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

import {
	mockedCoursesList as courseListAPI,
	mockedAuthorsList as authorsListAPI,
} from './constants';

const App = () => {
	const [coursesList, setCourses] = useState(courseListAPI);
	const [authorsList, setAuthors] = useState(authorsListAPI);
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		isLoggedIn: false,
	});

	return (
		<>
			<Router>
				<Header user={user} setUser={setUser} />

				<Routes>
					<Route
						path='/login'
						element={<Login user={user} setUser={setUser} />}
					/>

					<Route
						path='/registration'
						element={<Registration user={user} setUser={setUser} />}
					/>

					<Route
						path='/courses/:courseId'
						element={
							user.isLoggedIn ? (
								<CourseInfo courses={coursesList} authorsList={authorsList} />
							) : (
								<Navigate to='/registration' />
							)
						}
					/>

					<Route
						path='/courses'
						element={
							user.isLoggedIn ? (
								<Courses courses={coursesList} authorsList={authorsList} />
							) : (
								<Navigate to='/registration' />
							)
						}
					/>

					<Route
						path='/courses/add'
						element={
							user.isLoggedIn ? (
								<CreateCourse
									courses={coursesList}
									setCourses={setCourses}
									authorsList={authorsList}
									setAuthorsList={setAuthors}
								/>
							) : (
								<Navigate to='/registration' />
							)
						}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;

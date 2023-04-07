import React, { useState } from 'react';

import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import Button from './common/Button/Button';

import {
	mockedCoursesList as courseListAPI,
	mockedAuthorsList as authorsListAPI,
} from './constants';

const App = () => {
	const [courses, setCourses] = useState(courseListAPI);
	const [authorsList, setAuthorsList] = useState(authorsListAPI);
	const [isDisplayed, setIsDisplayed] = useState(false);

	return (
		<>
			<Header />
			{<article>learn react</article>}

			{isDisplayed ? (
				<CreateCourse
					courses={courses}
					setCourses={setCourses}
					authorsList={authorsList}
					setAuthorsList={setAuthorsList}
					isDisplayed={() => setIsDisplayed(!isDisplayed)}
				/>
			) : (
				<Courses courses={courses} authorsList={authorsList}>
					<Button
						width='large'
						onClick={() => setIsDisplayed(!isDisplayed)}
						text='Add new course'
					/>
				</Courses>
			)}
		</>
	);
};

export default App;

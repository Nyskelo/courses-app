import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from 'common/Button/Button';

import { CourseID } from 'store/courses/coursesTypes';

import {
	getAuthors,
	getCourses,
	getUser,
	useAppSelector,
} from 'store/storeTypes';

import styles from './Courses.module.css';

const Courses = () => {
	const navigate = useNavigate();
	const { courses } = useAppSelector(getCourses);
	const authorsAPI = useAppSelector(getAuthors);
	const user = useAppSelector(getUser);

	const [sortedCourses, setSortedCourses] = useState(courses);
	const [searchInput, setSearchInput] = useState('');

	const getFilteredCourses = useCallback(() => {
		if (searchInput) {
			const regex = new RegExp(searchInput, 'gi');
			return courses.filter(
				({ title, id }: CourseID) => title.match(regex) || id.match(regex)
			);
		}
		return courses;
	}, [searchInput, courses]);

	const searchBarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSortedCourses(getFilteredCourses);
	};

	useEffect(() => {
		!searchInput && setSortedCourses(getFilteredCourses);
	}, [searchInput, getFilteredCourses]);

	return (
		<>
			<nav className={styles.nav}>
				<SearchBar
					onSubmit={searchBarSubmit}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setSearchInput(e.target.value)
					}
					value={searchInput}
				/>
				{user.role === 'admin' && (
					<Button
						type='button'
						width='large'
						onClick={() => navigate('/courses/add')}
						text='Add new course'
						data-testid='add-course'
					/>
				)}
			</nav>
			<main className={styles.main} data-testid='container'>
				{sortedCourses &&
					sortedCourses.map((course: CourseID) => (
						<CourseCard
							{...course}
							key={course.id}
							authorsList={authorsAPI.authors}
						/>
					))}
			</main>
		</>
	);
};

export default Courses;

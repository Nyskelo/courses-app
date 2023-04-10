import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

import { TypeCourse } from '../../types/types';

import styles from './Courses.module.css';

const Courses: React.FC<TypeCourse> = ({
	courses,
	authorsList,
}): JSX.Element => {
	const navigate = useNavigate();
	const [sortedCourses, setSortedCourses] = useState(courses);
	const [searchInput, setSearchInput] = useState('');

	const getFilteredCourses = useCallback(() => {
		if (searchInput) {
			const regex = new RegExp(searchInput, 'gi');
			return courses.filter(
				({ title, id }) => title.match(regex) || id.match(regex)
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

	useEffect(() => {
		localStorage.getItem('USER') ? navigate('/courses') : navigate('/login');
	}, []);
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
				<Button
					type='button'
					width='large'
					onClick={() => navigate('/courses/add')}
					text='Add new course'
				/>
			</nav>
			<main className={styles.main}>
				{sortedCourses.map((course) => (
					<CourseCard {...course} key={course.id} authorsList={authorsList} />
				))}
			</main>
		</>
	);
};

export default Courses;

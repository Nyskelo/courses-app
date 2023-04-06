import React, { useCallback, useEffect, useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import styles from './Courses.module.css';

const Courses = ({ children, courses, authorsList }) => {
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

	const searchBarSubmit = (e) => {
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
					onChange={(e) => setSearchInput(e.target.value)}
					value={searchInput}
				/>
				{children}
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

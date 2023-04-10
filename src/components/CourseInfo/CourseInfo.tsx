import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';

import styles from './CourseInfo.module.css';
import InfoCard from './InfoCard/InfoCard';

import { TypeCourse } from '../../types/types';
import { useMemo } from 'react';

const CourseInfo: React.FC<TypeCourse> = ({ courses, authorsList }) => {
	const { courseId } = useParams();
	const navigate = useNavigate();

	const course = courses.filter(({ id }) => id === courseId);
	const title = useMemo(() => course.map(({ title }) => title), [course]);

	return (
		<section className={styles.wrapper}>
			<Button
				type='submit'
				width='largt'
				text='< Back to courses'
				onClick={() => navigate('/courses')}
			/>
			<h1 className={styles.title}>{title}</h1>
			{course.map((course) => (
				<InfoCard {...course} key={course.id} authorsList={authorsList} />
			))}
		</section>
	);
};

export default CourseInfo;

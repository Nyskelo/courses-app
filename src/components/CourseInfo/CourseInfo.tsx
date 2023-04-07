import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';

import styles from './CourseInfo.module.css';
import InfoCard from './InfoCard/InfoCard';

import { TypeCourse } from '../../types/types';

const CourseInfo = ({ courses, authorsList }: TypeCourse) => {
	const { courseId } = useParams();
	const navigate = useNavigate();

	const course = courses.filter(({ id }) => id === courseId);
	const title = course.map(({ title }) => title);

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

import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from 'common/Button/Button';
import InfoCard from './InfoCard/InfoCard';

import { getAuthors, getCourses, useAppSelector } from 'store/storeTypes';
import { CourseID } from 'store/courses/coursesTypes';

import styles from './CourseInfo.module.css';

const CourseInfo = () => {
	const navigate = useNavigate();
	const { courseId } = useParams();
	const { courses } = useAppSelector(getCourses);
	const authorsAPI = useAppSelector(getAuthors);

	const course: CourseID[] = courses.filter(
		({ id }: { id: string }) => id === courseId
	);
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
			{course.map((course: CourseID) => (
				<InfoCard
					{...course}
					key={course.id}
					authorsList={authorsAPI.authors}
				/>
			))}
		</section>
	);
};

export default CourseInfo;

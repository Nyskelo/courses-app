import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AddTitle from './components/AddTitle/AddTitle';
import AddDescriptions from './components/AddDescriptions/AddDescriptions';
import AddDetails from './components/AddDetails/AddDetails';
import Button from 'common/Button/Button';
import Duration from './components/AddDetails/components/Duration/Duration';

import { ERROR, REGEX } from '../../constants';
import * as fn from 'helpers/index';
import { useDataValidation } from 'hooks';
import { setCourseThunk } from 'store/courses/coursesThunk';
import { authorsToUpdateThunk } from 'store/authors/authorsThunk';
import { cleareList } from 'store/authors/authorsCreators';
import { actions, Course } from 'store/courses/coursesTypes';
import { getAuthors, useAppDispatch, useAppSelector } from 'store/storeTypes';

import styles from './CourseForm.module.css';

const CourseForm = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const authorsList = useAppSelector(getAuthors);
	const { courseId } = useParams();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authors, setAuthors] = useState(['']);
	const duration = useDataValidation(ERROR.msg_3, REGEX.duration);

	const courseToUpdate = JSON.parse(
		localStorage.getItem(actions.UPDATE_COURSE) as string
	);
	const isAvailableCourseToSetUpToUpdate = courseToUpdate && !title;

	const addNewCourse = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const validCourseIf = {
			title: title.length >= 2,
			description: description.length >= 2,
			duration: Number(duration.data.value) > 0,
			authors: fn.authorsArrayLength(authorsList.courseAuthors) > 0,
		};

		if (fn.formValidation(validCourseIf, ERROR.msg_2)) {
			const newCourse: Course = {
				title,
				description,
				duration: Number(duration.data.value),
				creationDate: `${fn.dateGenerator(new Date())}`,
				authors,
			};

			dispatch(cleareList(authorsList.courseAuthors));
			dispatch(setCourseThunk(newCourse, courseId ?? ''));
			removeData();

			return true;
		}
		return false;
	};

	const removeData = () => {
		fn.localStorageRemoveItem([actions.UPDATE_COURSE]);
	};

	useEffect(() => {
		if (isAvailableCourseToSetUpToUpdate) {
			setTitle(courseToUpdate.title);
			setDescription(courseToUpdate.description);
			setAuthors(courseToUpdate.authors);

			duration.setData({
				...duration.data,
				value: String(courseToUpdate.duration),
			});

			dispatch(authorsToUpdateThunk(courseToUpdate));
		}
	}, [isAvailableCourseToSetUpToUpdate]);

	return (
		<>
			<div className={styles.back}>
				<Button
					type='submit'
					width='largt'
					text='< Back to courses'
					onClick={() => {
						dispatch(cleareList(authorsList.courseAuthors));
						navigate('/courses');
						removeData();
					}}
				/>
			</div>

			<form
				className={styles.wrapper}
				onSubmit={(e) => addNewCourse(e) && navigate('/courses')}
			>
				<AddTitle title={title} setTitle={setTitle} text='Create course' />

				{!courseId ? (
					<Button
						width='large'
						type='submit'
						text='Create course'
						data-testid='create-course'
					/>
				) : (
					<Button width='large' type='submit' text='Update course' />
				)}

				<AddDescriptions
					description={description}
					setDescription={setDescription}
				/>

				<AddDetails setAuthors={setAuthors}>
					<Duration
						onChange={duration.checkIfValid}
						value={`${duration.data.value}`}
						duration={duration.data}
						hours={fn.minutesToHoures(Number(duration.data.value))}
					/>
				</AddDetails>
			</form>
		</>
	);
};

export default CourseForm;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import AddTitle from './components/AddTitle/AddTitle';
import AddDescriptions from './components/AddDescriptions/AddDescriptions';
import AddDetails from './components/AddDetails/AddDetails';
import Button from 'common/Button/Button';
import Duration from './components/AddDetails/components/Duration/Duration';

import { ERROR, REGEX } from '../../constants';
import * as fn from 'helpers/index';
import { useDataValidation } from 'hooks';
import { CourseID } from 'store/courses/coursesTypes';
import { getAuthors, useAppDispatch, useAppSelector } from 'store/storeTypes';
import { createCourse } from 'store/courses/coursesCreators';
import { cleareList } from 'store/authors/authorsCreators';

import styles from './CreateCourse.module.css';

const CreateCourse = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const authorsList = useAppSelector(getAuthors);

	const duration = useDataValidation(ERROR.msg_3, REGEX.duration);

	const [newCourse, setNewCourse] = useState<CourseID>({
		id: uuidv4(),
		title: '',
		description: '',
		creationDate: fn.dateGenerator(new Date()),
		duration: 0,
		authors: [],
	});

	const addNewCourse = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const validCourseIf = {
			title: newCourse.title.length >= 2,
			description: newCourse.description.length >= 2,
			duration: newCourse.duration > 0,
			authors: fn.authorsArrayLength(authorsList.courseAuthors) > 0,
		};
		if (fn.formValidation(validCourseIf, ERROR.msg_2)) {
			dispatch(cleareList(authorsList.courseAuthors));
			dispatch(createCourse(newCourse));
			return true;
		}
		return false;
	};

	useEffect(() => {
		setNewCourse((prev) => ({
			...prev,
			duration: Number(duration.data.value),
		}));
	}, [duration.data.value]);

	return (
		<>
			<div className={styles.back}>
				<Button
					type='submit'
					width='largt'
					text='< Back to courses'
					onClick={() => navigate('/courses')}
				/>
			</div>
			<form
				className={styles.wrapper}
				onSubmit={(e) => addNewCourse(e) && navigate('/courses')}
			>
				<AddTitle
					newCourse={newCourse}
					setNewCourse={setNewCourse}
					text='Create course'
				/>

				<Button width='large' type='submit' text='Create course' />

				<AddDescriptions newCourse={newCourse} setNewCourse={setNewCourse} />

				<AddDetails newCourse={newCourse} setNewCourse={setNewCourse}>
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

export default CreateCourse;

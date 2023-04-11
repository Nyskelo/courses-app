import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import AddTitle from './components/AddTitle/AddTitle';
import AddDescriptions from './components/AddDescriptions/AddDescriptions';
import AddDetails from './components/AddDetails/AddDetails';
import Button from '../../common/Button/Button';

import { VALID } from '../../constants';
import * as fn from '../../helpers/index';
import { useAuthorsReducer, useDataValidation } from '../../hooks/index';
import { TypeCreateCourse, TypeAddDetails } from '../../types/types';

import styles from './CreateCourse.module.css';

const CreateCourse: React.FC<TypeCreateCourse> = ({ ...props }) => {
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({ title: '', descriptions: '' });

	const [handleDuration, duration] = useDataValidation(
		VALID.duration.messageError,
		VALID.duration.regex
	);
	const [handleCheckName, checkName, setCheckName] = useDataValidation(
		VALID.name.messageError,
		VALID.name.regex
	);

	const [state, author, setAuthorName, createAuthor, addAuthor, deleteAuthor] =
		useAuthorsReducer({
			authors: props.authorsList,
			setAuthors: props.setAuthorsList,
		});

	const validDataForm = {
		title: inputs.title.length >= 2,
		descripthions: inputs.descriptions.length >= 2,
		duration:
			Number(Object.values(duration).filter((value) => Number(value))) >= 1,
		authors: Object.values(state)[1].length > 0,
	};

	const createCourse = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (fn.formValidation(validDataForm, VALID.form.messageError)) {
			props.setCourses([
				...props.courses,
				{
					id: uuidv4(),
					title: inputs.title,
					description: inputs.descriptions,
					creationDate: fn.dateGenerator(new Date()),
					duration: Number(
						Object.values(duration).filter((value) => Number(value))
					),
					authors: Object.values(state).map(({ id }) => id),
				},
			]);
			return true;
		}
	};

	const propsForAddDetails = {
		state,
		author,
		setAuthorName,
		createAuthor,
		addAuthor,
		deleteAuthor,
		handleDuration,
		duration,
		handleCheckName,
		checkName,
		setCheckName,
	};

	useEffect(() => {
		!localStorage.getItem('USER') && navigate('/login');
	}, []);

	return (
		<form
			className={styles.wrapper}
			onSubmit={(e) => createCourse(e) && navigate('/courses')}
		>
			<AddTitle
				value={inputs.title}
				onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
			/>
			<Button width='large' type='submit' text='Create course' />
			<AddDescriptions
				value={inputs.descriptions}
				onChange={(e) => setInputs({ ...inputs, descriptions: e.target.value })}
			/>
			<AddDetails {...(propsForAddDetails as TypeAddDetails)}></AddDetails>
		</form>
	);
};

export default CreateCourse;

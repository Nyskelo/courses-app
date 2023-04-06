import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddTitle from './components/AddTitle/AddTitle';
import AddDescriptions from './components/AddDescriptions/AddDescriptions';
import AddDetails from './components/AddDetails/AddDetails';
import Button from '../../common/Button/Button';

import { VALID } from '../../constants';
import { dateGenerator, formValidation } from '../../helpers/index';
import { useAuthorsReducer, useDataValidation } from '../../hooks/index';

import styles from './CreateCourse.module.css';

const CreateCourse = ({
	courses,
	setCourses,
	authorsList,
	setAuthorsList,
	isDisplayed,
}) => {
	const [inputs, setInputs] = useState({ title: '', descriptions: '' });

	const [handleDuration, duration] = useDataValidation(
		VALID.duration.messageError,
		VALID.duration.regex
	);
	const [handleTitle, title] = useDataValidation(
		VALID.title.messageError,
		VALID.title.regex
	);

	const [state, author, setAuthorName, createAuthor, addAuthor, deleteAuthor] =
		useAuthorsReducer(authorsList, setAuthorsList);

	const invalidDataForm = [
		inputs.title.length < 2,
		inputs.descriptions.length < 2,
		duration.value < 1,
		state.courseAuthors.length === 0,
	];

	const createCourse = (e) => {
		e.preventDefault();

		if (formValidation(invalidDataForm, VALID.form.messageError)) {
			setCourses([
				...courses,
				{
					id: uuidv4(),
					title: inputs.title,
					description: inputs.descriptions,
					creationDate: dateGenerator(new Date()),
					duration: duration.value,
					authors: state.courseAuthors.map(({ id }) => id),
				},
			]);
			isDisplayed();
		}
	};

	return (
		<form className={styles.wrapper} onSubmit={createCourse}>
			<AddTitle
				value={inputs.title}
				onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
			/>
			<Button width='large' type='submit' text='Create course' />
			<AddDescriptions
				value={inputs.descriptions}
				onChange={(e) => setInputs({ ...inputs, descriptions: e.target.value })}
			/>
			<AddDetails
				update={{
					state,
					author,
					setAuthorName,
					createAuthor,
					addAuthor,
					deleteAuthor,
					handleDuration,
					duration,
					handleTitle,
					title,
				}}
			></AddDetails>
		</form>
	);
};

export default CreateCourse;

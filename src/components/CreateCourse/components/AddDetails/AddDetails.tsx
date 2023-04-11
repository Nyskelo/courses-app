import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import ListOfAuthors from './components/ListOfAuthors/ListOfAuthors';

import * as fn from 'helpers/index';
import { useDataValidation } from 'hooks/index';
import { ERROR, REGEX } from '../../../../constants';
import { createAuthor } from 'store/authors/authorsCreators';
import { Author } from 'store/authors/authorsTypes';
import { TypeAddDetails } from 'types/types';
import { getAuthors, useAppDispatch, useAppSelector } from 'store/storeTypes';

import styles from './AddDetails.module.css';

const AddDetails: React.FC<TypeAddDetails> = ({ ...props }) => {
	const dispatch = useAppDispatch();
	const authorsStore = useAppSelector(getAuthors);
	const isUpdating = window.location.pathname.match(/update/g);

	const newName = useDataValidation(ERROR.msg_3, REGEX.name);

	const onClickToCreateAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		newName.checkIfValid(e);
		if (newName.data.value.length >= 2) {
			const newAuthor: Author = {
				id: uuidv4(),
				name: newName.data.value,
			};
			newName.setData({ ...newName.data, value: '' });
			dispatch(createAuthor(newAuthor));
		}
	};

	useEffect(() => {
		authorsStore.courseAuthors.length > 0 &&
			props.setNewCourse((prev) => ({
				...prev,
				authors: fn.getArrayOfAuthorsIDs(authorsStore.courseAuthors),
			}));
	}, [authorsStore.courseAuthors]);

	useEffect(() => {
		if (isUpdating && !props.newCourse.title) {
			props.setNewCourse({ ...props.newCourse });
			newName.setData({
				...newName.data,
				value: 'Alla Oleksyn',
			});
		}
	}, [isUpdating, props.newCourse.title]);

	return (
		<div className={styles.wrapper}>
			<CreateAuthor
				value={newName.data.value}
				onChange={newName.checkIfValid}
				onClick={onClickToCreateAuthor}
				checkName={newName.data}
			/>

			<ListOfAuthors
				textTitle='Authors'
				textButton='Add author'
				authors={authorsStore.authors}
			/>

			{props.children}

			<ListOfAuthors
				textTitle='Course authors'
				textButton='Delete author'
				authors={authorsStore.courseAuthors}
			/>
		</div>
	);
};

export default AddDetails;

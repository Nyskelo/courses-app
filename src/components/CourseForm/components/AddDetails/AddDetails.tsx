import { useEffect } from 'react';

import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import ListOfAuthors from './components/ListOfAuthors/ListOfAuthors';

import * as fn from 'helpers/index';
import { useDataValidation } from 'hooks/index';
import { ERROR, REGEX } from '../../../../constants';
import { createAuthorThunk } from 'store/authors/authorsThunk';
import { newAuthor } from 'store/authors/authorsTypes';
import { TypeAddDetails } from 'types/types';
import { getAuthors, useAppDispatch, useAppSelector } from 'store/storeTypes';

import styles from './AddDetails.module.css';

const AddDetails: React.FC<TypeAddDetails> = ({ ...props }) => {
	const dispatch = useAppDispatch();
	const authorsStore = useAppSelector(getAuthors);

	const newName = useDataValidation(ERROR.msg_3, REGEX.name);
	const isUpdating = window.location.pathname.match(/update/g);

	const onClickToCreateAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		newName.checkIfValid(e);
		if (newName.data.value.length >= 2) {
			const newAuthor: newAuthor = { name: newName.data.value };
			newName.setData({ ...newName.data, value: '' });
			dispatch(createAuthorThunk(newAuthor));
		}
	};

	useEffect(() => {
		authorsStore.courseAuthors.length > 0 &&
			props.setAuthors(fn.getArrayOfAuthorsIDs(authorsStore.courseAuthors));
	}, [authorsStore.courseAuthors]);

	useEffect(() => {
		isUpdating &&
			newName.setData({
				...newName.data,
				value: 'Alla Oleksyn',
			});
	}, []);

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

import React from 'react';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange, onSubmit }) => {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<Input
				type='text'
				placeholder='Enter course name...'
				value={value}
				onChange={onChange}
				labelVisibility='hidden'
				labelText=''
				name='search'
			/>
			<Button width='small' type='submit' text='Search' />
		</form>
	);
};

export default SearchBar;

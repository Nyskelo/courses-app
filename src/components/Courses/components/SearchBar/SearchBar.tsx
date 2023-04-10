import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import { TypeSearchBar } from '../../../../types/types';

import styles from './SearchBar.module.css';

const SearchBar: React.FC<TypeSearchBar> = ({ ...props }): JSX.Element => {
	return (
		<form className={styles.form} onSubmit={props.onSubmit}>
			<Input
				type='text'
				placeholder='Enter course name...'
				value={props.value}
				onChange={props.onChange}
				labelVisibility='hidden'
				labelText=''
				name='search'
			/>

			<Button width='small' type='submit' text='Search' />
		</form>
	);
};

export default SearchBar;

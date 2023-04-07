import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import ListOfAuthors from './components/ListOfAuthors/ListOfAuthors';
import Duration from './components/Duration/Duration';

import * as fn from '../../../../helpers/index';
import { TypeAddDetails, ValidState } from '../../../../types/types';

import styles from './AddDetails.module.css';

const AddDetails = ({ ...props }: TypeAddDetails) => {
	const onClickCreateAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (!props.checkName.error && props.checkName.value.length >= 2) {
			props.handleCheckName(e);
			props.createAuthor(props.checkName.value);
			props.setCheckName({ ...props.checkName, value: '' });
		} else {
			props.handleCheckName(e);
			return;
		}
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.handleCheckName(e);
		props.setAuthorName(e);
	};

	return (
		<div className={styles.wrapper}>
			<CreateAuthor
				value={props.author}
				onChange={onChange}
				onClick={onClickCreateAuthor}
				checkName={props.checkName as ValidState}
			/>

			<ListOfAuthors
				textTitle='Authors'
				textButton='Add author'
				authors={props.state.authors}
				onClick={props.addAuthor}
			/>

			<Duration
				onChange={props.handleDuration}
				value={`${props.duration.value}`}
				duration={props.duration as ValidState}
				hours={fn.minutesToHoures(Number(props.duration.value))}
			/>

			<ListOfAuthors
				textTitle='Course authors'
				textButton='Delete author'
				authors={props.state.courseAuthors}
				onClick={props.deleteAuthor}
			/>
		</div>
	);
};

export default AddDetails;

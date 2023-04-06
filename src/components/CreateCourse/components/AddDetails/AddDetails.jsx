import React from 'react';

import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import ListOfAuthors from './components/ListOfAuthors/ListOfAuthors';
import Duration from './components/Duration/Duration';

import * as fn from '../../../../helpers/index.js';

import styles from './AddDetails.module.css';

const AddDetails = ({ update }) => {
	return (
		<div className={styles.wrapper}>
			<CreateAuthor
				value={update.author.name}
				onChange={(e) => {
					update.handleTitle(e) && update.setAuthorName(e);
				}}
				onClick={(e) => {
					update.createAuthor(e) || update.handleTitle(e);
				}}
				title={update.title}
			/>
			<ListOfAuthors
				textTitle='Authors'
				textButton='Add author'
				authors={update.state.authors}
				onClick={update.addAuthor}
			/>
			<Duration
				onChange={(e) => update.handleDuration(e)}
				value={update.duration.value}
				duration={update.duration}
				hours={fn.minutesToHoures(update.duration.value)}
			/>
			<ListOfAuthors
				textTitle='Course authors'
				textButton='Delete author'
				authors={update.state.courseAuthors}
				onClick={update.deleteAuthor}
			/>
		</div>
	);
};

export default AddDetails;

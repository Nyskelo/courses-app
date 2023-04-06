import React from 'react';

import Button from '../../../../common/Button/Button';
import SectionMain from './components/SectionMain/SectionMain';
import SectionDetails from './components/SectionDetails/SectionDetails';
import DetailsItem from '../CourseCard/components/Item/Item';

import * as fn from '../../../../helpers/index.js';

import styles from './CourseCard.module.css';

const CourseCard = ({
	title,
	description,
	duration,
	creationDate,
	authors,
	authorsList,
}) => {
	return (
		<div className={styles.main__wrapper}>
			<SectionMain title={title} description={description} />
			<div className={styles.details__wrapper}>
				<SectionDetails>
					<DetailsItem
						title='Authors:'
						value={fn.searchFilter(authorsList, authors)}
					/>
					<DetailsItem title='Duration:' value={fn.minutesToHoures(duration)} />
					<DetailsItem
						title='Created:'
						value={fn.dateGenerator(creationDate)}
					/>
				</SectionDetails>
				<Button width='large' text='Show course' />
			</div>
		</div>
	);
};

export default CourseCard;

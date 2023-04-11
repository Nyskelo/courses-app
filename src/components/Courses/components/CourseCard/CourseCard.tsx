import { useNavigate } from 'react-router-dom';

import Button from '../../../../common/Button/Button';
import SectionMain from './components/SectionMain/SectionMain';
import SectionDetails from './components/SectionDetails/SectionDetails';
import DetailsItem from './components/Item/Item';

import * as fn from '../../../../helpers/index';
import { TypeCourseCard } from '../../../../types/types';

import styles from './CourseCard.module.css';

const CourseCard: React.FC<TypeCourseCard> = ({ ...props }) => {
	const navigate = useNavigate();
	return (
		<div className={styles.main__wrapper}>
			<SectionMain title={props.title} description={props.description} />

			<div className={styles.details__wrapper}>
				<SectionDetails>
					<DetailsItem
						title='Authors:'
						value={fn.searchFilter(props.authorsList, props.authors)}
					/>
					<DetailsItem
						title='Duration:'
						value={fn.minutesToHoures(props.duration)}
					/>
					<DetailsItem
						title='Created:'
						value={fn.dateGenerator(props.creationDate)}
					/>
				</SectionDetails>

				<Button
					type='button'
					width='large'
					text='Show course'
					onClick={() => navigate(`/courses/${props.id}`)}
				/>
			</div>
		</div>
	);
};

export default CourseCard;

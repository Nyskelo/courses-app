import { useNavigate } from 'react-router-dom';

import Button from 'common/Button/Button';
import SectionMain from './components/SectionMain/SectionMain';
import SectionDetails from './components/SectionDetails/SectionDetails';
import DetailsItem from './components/Item/Item';

import * as fn from 'helpers/index';
import { TypeCourseCard } from 'types/types';
import { useAppDispatch } from 'store/storeTypes';
import { deleteCourse } from 'store/courses/coursesCreators';

import styles from './CourseCard.module.css';

const CourseCard: React.FC<TypeCourseCard> = ({ ...props }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<div className={styles.main__wrapper} data-testid='card'>
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
				<div className={styles.details__button__wrapper}>
					<Button
						type='button'
						width='large'
						text='Show course'
						onClick={() => navigate(`/courses/${props.id}`)}
					/>
					<Button type='button' width='x-small' title='update' text='✏️' />
					<Button
						type='button'
						width='x-small'
						title='delete'
						text='🗑️'
						onClick={() =>
							dispatch(
								deleteCourse({
									title: props.title,
									description: props.description,
									duration: props.duration,
									creationDate: props.creationDate,
									authors: props.authors,
									id: props.id,
								})
							)
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;

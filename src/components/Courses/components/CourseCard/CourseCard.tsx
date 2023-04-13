import { useNavigate } from 'react-router-dom';

import Button from 'common/Button/Button';
import SectionMain from './components/SectionMain/SectionMain';
import SectionDetails from './components/SectionDetails/SectionDetails';
import DetailsItem from './components/Item/Item';

import * as fn from 'helpers/index';
import { database, TypeCourseCard } from 'types/types';
import { getUser, useAppDispatch, useAppSelector } from 'store/storeTypes';
import { deleteCourseThunk } from 'store/courses/coursesThunk';

import styles from './CourseCard.module.css';
import { actions } from 'store/courses/coursesTypes';
import { api } from 'services';

const CourseCard: React.FC<TypeCourseCard> = ({ ...props }) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(getUser);
	const navigate = useNavigate();

	const getCourseToUpdateFromApi = async (id: string) => {
		const response = await api('get', database.GET_COURSE + `${id}`);
		if (response) {
			localStorage.setItem(
				actions.UPDATE_COURSE,
				JSON.stringify(response.data.result)
			);
			navigate(`/courses/update/${props.id}`);
		} else {
			navigate('/courses/');
		}
	};

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
					<DetailsItem title='Created:' value={props.creationDate} />
				</SectionDetails>
				<div className={styles.details__button__wrapper}>
					<Button
						type='button'
						width='large'
						text='Show course'
						onClick={() => navigate(`/courses/${props.id}`)}
					/>
					{user.role === 'admin' && (
						<>
							<Button
								type='button'
								width='x-small'
								title='update'
								text='✏️'
								onClick={() => getCourseToUpdateFromApi(props.id)}
							/>

							<Button
								type='button'
								width='x-small'
								title='delete'
								text='🗑️'
								onClick={() => dispatch(deleteCourseThunk(props.id))}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseCard;

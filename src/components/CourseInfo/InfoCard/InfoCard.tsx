import SectionMain from './components/SectionMain/SectionMain';
import SectionDetails from './components/SectionDetails/SectionDetails';
import DetailsItem from './components/Item/Item';

import * as fn from '../../../helpers/index';
import { TypeInfoCard } from '../../../types/types';

import styles from './InfoCard.module.css';

const InfoCard: React.FC<TypeInfoCard> = ({ ...props }): JSX.Element => {
	return (
		<div className={styles.main__wrapper}>
			<SectionMain description={props.description} />
			<SectionDetails>
				<DetailsItem title='ID:' value={props.id} />
				<DetailsItem
					title='Duration:'
					value={fn.minutesToHoures(props.duration)}
				/>
				<DetailsItem
					title='Created:'
					value={fn.dateGenerator(props.creationDate)}
				/>
				<DetailsItem
					title='Authors:'
					value={fn.searchFilter(props.authorsList, props.authors)}
				/>
			</SectionDetails>
		</div>
	);
};

export default InfoCard;

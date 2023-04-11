import { TypeDetailsItem } from '../../../../../../types/types';

import styles from './Item.module.css';

const DetailsItem: React.FC<TypeDetailsItem> = ({ title, value }) => {
	return (
		<section className={styles.wrapper}>
			<h4>{title}</h4>
			<p className={styles.text_ellipsis}>{value}</p>
		</section>
	);
};

export default DetailsItem;

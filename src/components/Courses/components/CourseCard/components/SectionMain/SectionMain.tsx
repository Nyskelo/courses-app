import { TypeSectionMain } from 'types/types';

import styles from './SectionMain.module.css';

const SectionMain: React.FC<TypeSectionMain> = ({ ...props }) => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.title}>{props.title}</h1>
			<p>{props.description}</p>
		</section>
	);
};

export default SectionMain;

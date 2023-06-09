import { TypeSectionDetails } from 'types/types';

import styles from './SectionDetails.module.css';

const SectionDetails: React.FC<TypeSectionDetails> = ({ children }) => (
	<div className={styles.wrapper}>{children}</div>
);

export default SectionDetails;

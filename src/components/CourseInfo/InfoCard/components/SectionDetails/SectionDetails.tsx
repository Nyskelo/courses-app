import { TypeSectionDetails } from '../../../../../types/types';

import styles from './SectionDetails.module.css';

const SectionDetails = ({ children }: TypeSectionDetails): JSX.Element => (
	<div className={styles.wrapper}>{children}</div>
);

export default SectionDetails;

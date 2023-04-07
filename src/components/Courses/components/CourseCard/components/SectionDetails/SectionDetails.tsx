import styles from './SectionDetails.module.css';

type Props = {
	children: string | JSX.Element | JSX.Element[];
};

const SectionDetails = ({ children }: Props): JSX.Element => (
	<div className={styles.wrapper}>{children}</div>
);

export default SectionDetails;

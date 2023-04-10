import styles from './Item.module.css';

const DetailsItem: React.FC<{
	title: string;
	value: string;
}> = ({ title, value }): JSX.Element => {
	return (
		<section className={styles.wrapper}>
			<h4>{title}</h4>
			<p className={styles.text_ellipsis}>{value}</p>
		</section>
	);
};

export default DetailsItem;

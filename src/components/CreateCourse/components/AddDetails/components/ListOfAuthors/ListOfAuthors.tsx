import Author from './components/Author/Author';
import { TypeListOfAuthors } from '../../../../../../types/types';

import styles from './ListOfAuthors.module.css';

const ListOfAuthors: React.FC<TypeListOfAuthors> = ({ ...props }) => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.title}>{props.textTitle}</h1>

			<div className={styles.scroll}>
				{!props.authors.length && (
					<p className={styles.message}>Author list is empty</p>
				)}

				{props.authors &&
					props.authors.map((author) => {
						return (
							<Author
								{...author}
								{...props}
								onClick={() => props.onClick(author.id, author.name)}
								key={author.id}
								text={props.textButton}
							/>
						);
					})}
			</div>
		</section>
	);
};

export default ListOfAuthors;

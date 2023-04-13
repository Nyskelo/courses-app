import Author from './components/Author/Author';
import { TypeListOfAuthors } from 'types/types';

import styles from './ListOfAuthors.module.css';
import { Author as AuthorType } from 'store/authors/authorsTypes';

const ListOfAuthors: React.FC<TypeListOfAuthors> = ({ ...props }) => {
	return (
		<section className={styles.wrapper} data-testid={props.textTitle}>
			<h1 className={styles.title}>{props.textTitle}</h1>

			<div className={styles.scroll}>
				{!props.authors.length && (
					<p className={styles.message}>Author list is empty</p>
				)}

				{props.authors &&
					props.authors.map((author: AuthorType) => {
						return (
							<Author
								{...author}
								{...props}
								author={author}
								key={author.id}
								text={props.textButton}
								id={author.id}
								deleteButton={props.textTitle === 'Authors'}
							/>
						);
					})}
			</div>
		</section>
	);
};

export default ListOfAuthors;

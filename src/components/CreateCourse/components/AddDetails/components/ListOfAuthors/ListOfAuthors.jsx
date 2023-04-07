import React from 'react';

import Author from './components/Author/Author';

import styles from './ListOfAuthors.module.css';

const ListOfAuthors = ({
	authors,
	onClick,
	textTitle,
	textButton,
	...props
}) => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.title}>{textTitle}</h1>
			<div className={styles.scroll}>
				{!authors.length && (
					<p className={styles.message}>Author list is empty</p>
				)}
				{authors &&
					authors.map((author) => {
						return (
							<Author
								{...author}
								{...props}
								onClick={() => onClick(author.id, author.name)}
								key={author.id}
								text={textButton}
							/>
						);
					})}
			</div>
		</section>
	);
};

export default ListOfAuthors;

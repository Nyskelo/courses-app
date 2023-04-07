const SectionMain = ({
	title,
	description,
}: {
	title?: string;
	description: string;
}): JSX.Element => {
	return (
		<section>
			<h1>{title}</h1>
			<p>{description}</p>
		</section>
	);
};

export default SectionMain;

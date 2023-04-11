const SectionMain: React.FC<{
	title?: string;
	description: string;
}> = ({ title, description }) => {
	return (
		<section>
			<h1>{title}</h1>
			<p>{description}</p>
		</section>
	);
};

export default SectionMain;

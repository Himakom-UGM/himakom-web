export type PropsProgram = {
	title: string;
	date: string;
	description: string;
	image: string;
}[];

export default function Program(props: { data: PropsProgram }) {
	const data = props.data;

	return (
		<div>
			<h1>Our Programs</h1>
			<div className="flex">
				<div className="flex basis-2/5 flex-col">
					{data.map((program) => program.title)}
				</div>
				<div className="basis-3/5"></div>
			</div>
		</div>
	);
}

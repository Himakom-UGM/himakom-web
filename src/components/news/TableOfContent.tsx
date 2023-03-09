export default function TableOfContent(props: { titles: string[] }) {
	return (
		<div>
			<h1 className="mt-5 mb-2 border-b-[1.5px] border-black pb-1 text-2xl font-semibold">
				Table of Contents
			</h1>
			{props.titles.map((title, index) => {
				return (
					<div key={Math.random() * 1000 + index} className="my-1 text-lg">
						<a href={`#${title}`}>{title}</a>
					</div>
				);
			})}
		</div>
	);
}

export default function Section(props: {
	content: { title: string; content: string[] }[];
}) {
	return (
		<div className="flex flex-col gap-y-6">
			{props.content.map((item, index) => {
				return (
					<div
						key={Math.random() * 1000 + index}
						className="flex flex-col gap-y-2"
					>
						<h2 className="text-2xl font-semibold" id={item.title}>
							{item.title}
						</h2>
						{item.content.map((content, index) => {
							return (
								<p key={Math.random() * 1000 + index} className="text-justify">
									{content}
								</p>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

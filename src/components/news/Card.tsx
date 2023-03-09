import Image from 'next/image';

export default function Card(props: {
	title: string;
	description: string;
	image: string;
	topic: string;
	date: string;
	author: string;
	primary: boolean;
}) {
	return (
		<div className="relative flex w-full basis-1/2 flex-col overflow-y-hidden rounded-xl">
			<Image
				src={props.image}
				alt="image"
				width={1200}
				height={600}
				className={`${props.primary ? '-mt-24' : ''} absolute`}
			/>
			<div
				className={`${
					props.primary
						? 'h-full bg-content-overlay hover:bg-content'
						: '-mt-16 bg-content-overlaySecondary hover:bg-content-secondary'
				} relative flex flex-col rounded-xl px-8 duration-700`}
			>
				<div
					className={`relative flex flex-col ${
						props.primary ? 'gap-y-4 pt-72 text-base' : 'gap-y-1 pt-36 text-sm'
					} font-lato text-[#F8F8F8]`}
				>
					<h1
						className={`${
							props.primary ? 'text-3xl 2xl:text-4xl' : 'text-2xl 2xl:text-3xl'
						} font-semibold `}
					>
						{props.title}
					</h1>
					<p className="mt-1 customMd:max-w-[90%]">{props.description}</p>
					<div className="flex items-center gap-x-4 pt-2 pb-6">
						<div className="rounded-xl border border-white px-5 py-[2px] text-white">
							{props.topic}
						</div>
						<div className="text-white ">
							Posted on {props.date} by {props.author}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

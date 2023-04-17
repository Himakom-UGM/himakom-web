import Image from 'next/image';

type CardProps = {
	division: string;
	title: string;
	date: string;
	description: string;
	image: string;
};

export default function TimelineCard({
	division,
	title,
	date,
	description,
	image,
}: CardProps) {

	return (
		<div className="overflow-hidden cursor-pointer rounded-xl bg-white pb-4">
			<Image
				src={image}
				alt={title}
				width={720}
				height={720}
                className="object-cover h-36 xl:h-40"
			/>
			<div className="flex h-[68px] justify-between px-5 py-2">
				<div>
					<h1 className="text-xl font-semibold">{title}</h1>
					<div className="text-sm">{date}</div>
				</div>
				<div className="h-fit mt-1 rounded-md bg-[#F3BE00] px-2 font-semibold text-white">
					{division}
				</div>
			</div>
			<div className="mt-1 px-5 h-28">{description}</div>
			<button className="mt-3 px-5">Read More...</button>
		</div>
	);
}

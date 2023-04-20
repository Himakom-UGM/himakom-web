import Image from 'next/image';
import Link from 'next/link';

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
		<div className="relative cursor-pointer overflow-hidden rounded-xl bg-white pb-12">
			<Image
				src={image + '?q=8&fm=webp'}
				alt={title}
				width={720}
				height={720}
				className="h-40 object-cover xl:h-48"
			/>
			<div className="flex h-[68px]  justify-between px-5 pt-4 pb-2">
				<div className="">
					<h1 className="text-2xl font-semibold xl:text-3xl">{title}</h1>
					<div className="text-sm">{date}</div>
				</div>
				<div className="mt-1 h-fit rounded-md bg-[#F3BE00] px-2 py-1 text-xl font-semibold text-white">
					{division}
				</div>
			</div>
			<div className="mt-2 h-fit px-5 text-lg lg:mt-8 xl:h-40">
				{description}
			</div>
			<button className="absolute bottom-2 px-5 text-xl hover:font-semibold">
				<Link href={'/event/' + transformTitleToParam(title)}>
					Read More...
				</Link>
			</button>
		</div>
	);
}

function transformTitleToParam(url: string) {
	return url.toLowerCase().replace(/ /g, '-');
}

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
		<div className="overflow-hidden cursor-pointer rounded-xl bg-white pb-4">
			<Image
				src={image + '?q=8&fm=webp'}
				alt={title}
				width={720}
				height={720}
                className="object-cover h-40 xl:h-48"
			/>
			<div className="flex h-[68px] justify-between px-5 pt-4 pb-2">
				<div className=''>
					<h1 className="text-2xl xl:text-3xl font-semibold">{title}</h1>
					<div className="text-sm">{date}</div>
				</div>
				<div className="h-fit text-xl mt-1 rounded-md bg-[#F3BE00] px-2 py-1 font-semibold text-white">
					{division}
				</div>
			</div>
			<div className="mt-2 lg:mt-8 px-5 h-64 xl:h-40 text-lg">{description}</div>
			<button className="px-5 mt-10 hover:font-semibold text-xl"><Link href=''>Read More...</Link></button>
		</div>
	);
}

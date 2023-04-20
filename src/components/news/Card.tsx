import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Card(props: {
	title: string;
	description: string;
	image: string;
	topic?: string;
	createdDate?: string;
	updateDate?: string;
	author?: string;
	primary: boolean;
	slug: string;
}) {
	const router = useRouter();
	return (
		<Link
			href={'/news/' + props.slug}
			className="relative mx-auto max-w-[80vw] customMd:max-w-none flex w-full min-w-[24rem] basis-1/2 cursor-pointer flex-col overflow-hidden rounded-xl"
		>
			<Image
				src={props.image + '?fm=webp&q=5'}
				alt="image"
				fill
				className={`${
					props.primary ? '' : ''
				} absolute aspect-square object-cover customMd:scale-100 xl:w-[639px]`}
			/>

			<div
				className={`${
					props.primary
						? 'bg-content-overlay-mobile hover:bg-content customMd:h-full customMd:bg-content-overlay'
						: ' h-full bg-content-overlaySecondary hover:bg-content-secondary customMd:mt-0'
				} relative flex flex-col rounded-xl px-8 transition-all duration-700`}
			>
				<div
					className={`relative flex flex-col text-sm ${
						props.primary ? 'gap-y-1 customMd:pt-64' : 'gap-y-1 customMd:pt-20'
					} pt-32 font-lato text-[#F8F8F8]`}
				>
					<h1 className="text-2xl font-semibold xl:text-3xl 2xl:text-5xl ">
						{props.title}
					</h1>
					<p className="my-1 xl:text-lg customMd:max-w-[90%] xl:my-4 xl:text-[20px]">
						{props.description}
					</p>
					<div className="flex flex-col items-center gap-y-3 gap-x-5 pt-2 pb-6 lg:pb-8 lg:flex-row">
						<div className="rounded-2xl border border-white px-4 py-1 xl:text-lg text-white xl:px-5 xl:py-2">
							{props.topic}
						</div>
						{props.createdDate && props.author && (
							<section className="flex flex-col gap-y-1 xl:text-lg">
								<div className="text-white">
									Posted on {props.createdDate} by {props.author}
								</div>
								<div className="text-white">
									Last modified on {props.updateDate}
								</div>
							</section>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
}

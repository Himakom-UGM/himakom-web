import Image from 'next/image';
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
}) {
	const router = useRouter();
	const redirectHandler = () => {
		router.push('/detailnews');
	};
	return (
		<div
			onClick={redirectHandler}
			className="relative mx-auto max-w-[80vw] customMd:max-w-none flex w-full min-w-[24rem] basis-1/2 cursor-pointer flex-col overflow-hidden rounded-xl"
		>
			<Image
				src={props.image + '?fm=webp&q=5'}
				alt="image"
				fill
				className={`${
					props.primary ? '' : ''
				} absolute aspect-square xl:w-[639px] object-cover customMd:scale-100`}
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
					<h1 className="text-2xl font-semibold lg:text-3xl xl:text-5xl ">
						{props.title}
					</h1>
					<p className="my-1 xl:my-4 text-lg customMd:max-w-[90%] xl:text-[20px]">
						{props.description}
					</p>
					<div className="flex flex-col items-center gap-y-3 gap-x-5 pt-2 pb-6 lg:flex-row">
						<div className="rounded-2xl border border-white px-4 py-1 lg:px-5 lg:py-2 text-lg text-white">
							{props.topic}
						</div>
						{props.createdDate && props.author && (
							<section className='text-lg flex flex-col gap-y-1'>
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
		</div>
	);
}

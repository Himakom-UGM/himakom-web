import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Card(props: {
	title: string;
	description: string;
	image: string;
	topic?: string;
	date?: string;
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
			className="relative flex w-full max-w-[450px] basis-1/2 cursor-pointer flex-col overflow-hidden rounded-xl"
		>
			<Image
				src={props.image}
				alt="image"
				fill
				className={`${
					props.primary ? 'customMd:-mt-8' : ''
				} absolute h-96 w-96 scale-150 object-cover customMd:scale-100`}
			/>

			<div
				className={`${
					props.primary
						? 'bg-content-overlay-mobile hover:bg-content customMd:h-full customMd:bg-content-overlay'
						: '-mt-24 bg-content-overlaySecondary hover:bg-content-secondary customMd:-mt-16'
				} relative flex flex-col rounded-xl px-8 transition-all duration-700`}
			>
				<div
					className={`relative flex flex-col text-sm ${
						props.primary ? 'gap-y-1 customMd:pt-64' : 'gap-y-1 customMd:pt-24'
					} pt-32 font-lato text-[#F8F8F8]`}
				>
					<h1 className="text-2xl font-semibold 2xl:text-3xl ">
						{props.title}
					</h1>
					<p className="mt-1 customMd:max-w-[90%]">{props.description}</p>
					<div className="flex flex-col items-center gap-y-2 gap-x-4 pt-2 pb-6 customMd:flex-row">
						<div className="rounded-xl border border-white px-5 py-[2px] text-white">
							{props.topic}
						</div>
						{props.date && props.author && (
							<div className="text-white ">
								Posted on {props.date} by {props.author}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

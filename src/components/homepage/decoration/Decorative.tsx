import Image from 'next/image';
import Link from 'next/link';

export default function Decorative() {
	return (
		<div className="relative z-10">
			<Image
				alt="bg"
				src="/main/images/bg/dike.png"
				height={1080}
				width={1920}
				className="absolute bottom-0 z-0 w-full object-cover object-center"
			/>
			<div className="flex justify-between">
				<Image
					alt="decorative left"
					src="/main/images/decorLeft.svg"
					width={1000}
					height={1000}
					className="z-10 w-40 customMd:w-48"
				/>
				<Image
					alt="decorative left"
					src="/main/images/decorRight.svg"
					width={1000}
					height={1000}
					className="z-10 w-40 customMd:w-48"
				/>
			</div>
			<div className="relative z-20 mx-auto aspect-square w-fit max-w-[95vw] rounded-t-full p-8">
				<Image
					src="/main/images/bg/cta.png"
					alt="decorative"
					fill
					className="-z-10"
				/>
				<div className="flex z-50 aspect-square w-64 min-w-[350px] flex-col items-center justify-center gap-y-3 rounded-t-full bg-blur pt-16  md:min-w-[400px]">
					<h2 className="text-center text-2xl ">
						Your innovative ideas can
						<br /> inspire a generation.
					</h2>
					<h1 className="mb-6 text-3xl font-semibold">Share them with us!</h1>
					<Link
						href="/aspiration"
						className="rounded-lg shadow-lg bg-[#212152] px-[15px] py-[6px] text-white"
					>
						Click here!
					</Link>
				</div>
			</div>
		</div>
	);
}

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
					className="z-10 w-44 customMd:w-56 xl:w-[22%]"
				/>
				<Image
					alt="decorative left"
					src="/main/images/decorRight.svg"
					width={1000}
					height={1000}
					className="z-10 w-44 customMd:w-56 xl:w-[22%]"
				/>
			</div>
			<div className="relative z-20 mx-auto aspect-square max-w-[88vw] rounded-t-full md:max-w-[75vw] lg:max-w-[65vw] xl:max-w-[50vw]">
				<Image
					src="/main/images/bg/cta.png"
					alt="decorative"
					fill
					className="z-10"
				/>
				<div className="z-50 flex aspect-square w-full flex-col items-center justify-center gap-y-3 rounded-t-full bg-blur-100 pt-16 md:min-w-[550px] xl:pt-24">
					<h2 className="text-center text-[20px] md:text-[3vw] lg:text-3xl xl:text-[40px]">
						Your innovative ideas can
						<br /> inspire a generation.
					</h2>
					<h1 className="mb-4 text-[4vw] font-semibold customMd:mb-8 customMd:mt-10 lg:text-4xl xl:text-[48px]">
						Share them with us!
					</h1>
					<Link
						href="/aspiration"
						className="rounded-lg z-20 bg-[#212152] px-[15px] py-[6px] text-white shadow-lg lg:text-lg"
					>
						Click here!
					</Link>
				</div>
			</div>
		</div>
	);
}

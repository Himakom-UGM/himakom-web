import Image from 'next/image';

export default function ProgramCard() {
	return (
		<div className="basis-3/5 max-h-fit ">
			<div className="relative">
				<Image
					src="/main/images/bg/content_imgdetailpost.png"
					alt="kewirush"
					width={1920}
					height={1080}
					className="rounded-t-xl max-h-[360px] object-cover"
				/>
				<div className="absolute bottom-5 left-5">
					<h1 className="text-3xl font-semibold text-white lg:text-4xl">
						Pemira Himakom
					</h1>
					<p className="text-lg text-white lg:text-xl">11 Februari 2023</p>
				</div>
			</div>
			<div className="px-4 py-5 min-h-[200px] bg-[#32327B] rounded-b-xl text-white">
				<p className="text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas
					cupiditate odio deleniti. Maiores, odio. Quos enim nemo fugit voluptas
					cumque incidunt expedita tempora aliquid nulla recusandae,
					reprehenderit voluptate consectetur?
				</p>
				<button className="cursor-pointer mt-4 text-[#F3DB00] text-xl font-semibold">Read more...</button>
			</div>
		</div>
	);
}

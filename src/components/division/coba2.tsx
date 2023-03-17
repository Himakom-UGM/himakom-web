import React from 'react';
import Image from 'next/image';

import bottom_1 from '../../../public/assets/division/bottom_1.png';
import bottom_2 from '../../../public/assets/division/bottom_2.png';

import segitiga from '../../../public/assets/division/segitiga.png';
import buletan from '../../../public/assets/division/buletan.png';

import bg_22 from '../../../public/assets/division/bg_22.png';
import bg_11 from '../../../public/assets/division/bg_11.png';

const Progams = () => {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white">
			<Image
				src={segitiga}
				className="absolute bottom-0 left-0 z-0  h-auto md:min-w-[400px] w-[300px] lg:hidden"
				alt=""
			/>
			<Image
				src={buletan}
				alt=""
				className="absolute top-0 right-0 z-0 h-auto md:min-w-[400px] w-[300px] lg:hidden"
			></Image>
			
			
			<Image
				src={bottom_1}
				alt=""
				className="absolute bottom-0 left-0 z-20 hidden h-auto w-[320px]  lg:block"
			></Image>
			<Image
				src={bottom_2}
				alt=""
				className="absolute bottom-0 -right-[1px] z-20 hidden h-auto w-[320px] lg:block"
			></Image>
			<Image
				src={bg_11}
				alt=""
				className="absolute left-0 -top-10 z-0 hidden h-auto w-[800px] lg:block"
			></Image>
			<Image
				src={bg_22}
				alt=""
				className="absolute  right-0 z-0  hidden h-auto w-[800px] lg:block"
			></Image>

			<main className="z-10 flex w-full flex-1 flex-col items-center justify-center px-10  ">
				<h1 className="text-bold text-4xl md:py-0 pt-10">Our Progam</h1>
				<div className="flex h-full w-full pb-20 lg:pb-0 max-w-[400px] md:max-w-full flex-col overflow-hidden md:pt-5 md:w-5/6 md:flex-row lg:h-[400px]">
					<div className="w-full  pt-10 pb-10 md:ml-0 md:w-3/6 md:p-0 lg:w-[500px]">
						<ul className="flex w-full max-w-full gap-2 overflow-x-auto overflow-y-hidden rounded-lg md:h-[570px]  md:w-full md:flex-col md:overflow-y-auto md:pr-5 lg:w-[350px] ml-16">
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-normal text-white hover:bg-blue-700 ">
								Divwar
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Ilkomp Got Talen
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Arak Arakan
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Jumping
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Sneakers
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Computer in Action
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Mikat Challenge (Katchang)
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Mikat Challenge (Katchang)
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Mikat Challenge (Katchang)
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Mikat Challenge (Katchang)
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Mikat Challenge (Katchang)
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Mikat Challenge (Katchang)
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Mikat Challenge (Katchang)
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Mikat Challenge (Katchang)
							</li>
							<li className="md:px-auto text-md min-w-fit rounded-lg bg-[#32327B] p-2 text-left font-medium text-white hover:bg-blue-700 ">
								Mikat Challenge (Katchang)
							</li>
						</ul>
					</div>
					<div className="mx-auto mr-16 h-full w-full rounded-2xl bg-[#32327B] text-justify text-white md:w-5/6 lg:ml-10">
						<Image
							src={'/progams.png'}
							height={600}
							width={1920}
							alt="gambar"
							className="w-full "
						></Image>
						<p className="m-5 ">
							Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
							turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
							nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
							tellus elit sed risus. Maecenas eget condimentum velit, sit amet
							feugiat lectus. Class aptent taciti sociosqu ad litora torquent
							per conubia nostra, per inceptos himenaeos. Porem ipsum dolor sit
							amet, consectetur adipiscing elit. Etiam eu turpis molestie,
							dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
							accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
							sed risus. Maecenas eget condimentum velit, sit amet feugiat
							lectus. Class aptent taciti sociosqu ad litora torquent per
							conubia nostra, per inceptos himenaeos.{' '}
						</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Progams;

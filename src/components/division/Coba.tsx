import React from 'react';
import Image from 'next/image';

import bottom_1 from '../../../public/assets/division/bottom_1.png';
import bottom_2 from '../../../public/assets/division/bottom_2.png';
import bg_1 from '../../../public/assets/division/bg_progams_1.png';
import bg_2 from '../../../public/assets/division/bg_progams_2.png';



const Coba = () => {
	return (
		<div className="relative h-screen w-screen overflow-hidden bg-[#ffff] bg-cover">
			<Image
				src={bottom_1}
				alt=""
				className="absolute top-[630px]  z-20 hidden h-auto w-[320px] lg:block"
			></Image>
			<Image
				src={bottom_2}
				alt=""
				className="absolute top-[630px] -right-[1px] z-20 hidden h-auto w-[320px] lg:block"
			></Image>
			<Image
				src={bg_1}
				alt=""
				className="absolute -top-[740px] hidden -left-[500px] z-0 h-auto w-[1550px] lg:block"
			></Image>
			<Image
				src={bg_2}
				alt=""
				className="absolute -top-[240px] hidden -right-[850px] z-0 h-auto w-[1600px] lg:block w-max-[1600px]"
			></Image>
			<div className="relative  mt-10 m-auto flex justify-center text-4xl font-bold md:top-5 ">
				<h1>Our Progams</h1>
			</div>
			<div className="relative ">
				<div className="container mx-auto flex w-full items-center justify-center px-20 text-center ">
					<div className="flex w-5/6 flex-col px-40 md:flex-row pb-20	 ">
						<div className="basis-2/6">
							<div className="md:-ml-20 -ml-40 flex min-w-[600px] flex-col md:w-full customMd:min-w-[400px] ">
								<ul className="flex h-[60px] max-w-full gap-4 overflow-x-auto overflow-y-hidden rounded-lg  md:h-[450px] md:w-[100%] md:flex-col md:overflow-y-auto ">
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-normal text-white hover:bg-blue-700 ">
										Divwar
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Ilkomp Got Talen
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Arak Arakan
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Jumping
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Sneakers
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Computer in Action
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Mikat Challenge (Katchang)
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Mikat Challenge (Katchang)
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Mikat Challenge (Katchang)
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Mikat Challenge (Katchang)
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Mikat Challenge (Katchang)
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Mikat Challenge (Katchang)
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Mikat Challenge (Katchang)
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Mikat Challenge (Katchang)
									</button>
									<button className="md:px-auto rounded-lg bg-[#32327B] p-2 text-left text-lg font-medium text-white hover:bg-blue-700 ">
										Mikat Challenge (Katchang)
									</button>
								</ul>
							</div>
						</div>
						<div className="w-5/6 ">
							<div className="md:w-max-sm relative -mx-20 my-5 flex max-h-[450px] w-[460px]  flex-col justify-center self-center overflow-hidden rounded-2xl bg-[#32327B] shadow-lg md:my-auto md:ml-20 -ml-[180px] md:mr-44 md:h-[450px] md:w-full">
								<Image
									src={'/progams.png'}
									height={900000000}
									width={900}
									alt="gambar"
									className="w-full"
								></Image>
								<div className=" px-6 py-4">
									<p className="text-justify text-base text-white">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Tempore laborum quibusdam, tempora ad qui consequuntur
										reiciendis itaque dolor delectus excepturi sequi consequatur
										error, libero non placeat totam rem amet reprehenderit ut,
										eaque autem iure fuga. Facilis quisquam sequi cupiditate?
										Sunt placeat asperiores magni minima voluptatibus voluptate
										accusantium debitis reiciendis laudantium!
									</p>
									<div className=" pb-5 text-left text-yellow-300">
										<a href="#">Read me...</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coba;

import React from 'react';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className="relative h-full w-full bg-[url('/bg_devision_white.png')] bg-cover bg-center">
			<div className="bg-gray flex min-h-screen flex-col items-center justify-center py-2">
				<main className="flex w-full flex-1 items-center justify-center px-20 text-center">
					<div className="mt-10 h-[540px] w-3/4 rounded-2xl bg-white shadow-2xl flex flex-col md:flex-row  ">
						<div className=" mx-40 mt-20 h-[165px] w-[165px]  ">
							<Image
								src={'/Logos_kewirus.png'}
								width={300}
								height={400}
								alt="hmm"
							></Image>
							<p className="mx-auto p-5 font-bold">Kewirausahaan</p>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Facilis distinctio maiores saepe dolore!
							</p>
						</div>
						<div>
							<Image
								src={'/Hero.png'}
								height={300}
								width={300}
								alt="gambar"
								className=""
							></Image>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Hero;

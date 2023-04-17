import React from 'react';
import Image from 'next/image';

import segitiga from '../../../public/assets/division/segitiga.png';
import buletan from '../../../public/assets/division/buletan.png';

const Hero = () => {
	return (
		<div className="  relative h-screen w-screen overflow-hidden bg-white bg-cover bg-center">
			<Image
				src={segitiga}
				className="absolute -bottom-[50vh] -left-[300px] z-0  h-auto w-[825px]"
				alt=""
			/>
			<Image
				src={buletan}
				alt=""
				className="absolute -top-[300px]  -right-[300px] z-0 h-auto w-[825px]"
			></Image>
			<div className="bg-gray flex min-h-screen flex-col items-center justify-center py-2 ">
				<main className="flex w-full flex-1 items-center justify-center px-20 text-center">
					<div className="relative z-0 mt-10 flex w-auto flex-col rounded-2xl bg-white shadow-2xl md:flex-row ">
						<div className=" mx-auto  flex w-5/6 flex-col items-center ">
							<Image
								src={'/main/Logos_kewirus.png'}
								width={300}
								height={400}
								alt="hmm"
								className="mt-20 h-[165px] w-[165px] "
							></Image>
							<p className="text-4xl">Kewirausahaan</p>
							<p className="ml-5 px-5 py-8 text-justify text-xl">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
								incidunt cumque, delectus nostrum nulla aliquid nobis ad itaque
								suscipit illum harum totam veritatis dolorum ex repellat
								voluptas magnam et dolorem ipsa vitae quo fuga eveniet
								perspiciatis! Voluptatum culpa facere non dicta, tempore et
								recusandae, amet excepturi autem rerum minus distinctio?{' '}
							</p>
						</div>
						<div className=" relative mx-10 my-5 w-5/6 self-center">
							<Image
								src={'/main/Hero.png'}
								height={900}
								width={900}
								alt="gambar"
								className="w-[1920px] py-10"
							></Image>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Hero;

import React from 'react';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className="relative h-full w-full bg-[url('/bg_devision_white.png')] bg-cover bg-center">
			<div className="bg-gray flex min-h-screen flex-col items-center justify-center py-2">
				<main className="flex w-full flex-1 items-center justify-center px-20 text-center">
					<div className="mt-10 w-auto rounded-2xl bg-white shadow-2xl flex flex-col md:flex-row">
						<div className=" mx-auto  flex flex-col items-center  ">
							<Image
								src={'/Logos_kewirus.png'}
								width={300}
								height={400}
								alt="hmm"
                                className='h-[165px] w-[165px] mt-20 '
							></Image>
							<p className='text-4xl'>Kewirausahaan</p>
							<p className='px-5 py-8 text-lg ml-5'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam incidunt cumque, delectus nostrum nulla aliquid nobis ad itaque suscipit illum harum totam veritatis dolorum ex repellat voluptas magnam et dolorem ipsa vitae quo fuga eveniet perspiciatis! Voluptatum culpa facere non dicta, tempore et recusandae, amet excepturi autem rerum minus distinctio?							</p>
						</div>
						<div className=" mx-10 my-5 relative self-center">
							<Image
								src={'/Hero.png'}
								height={900}
								width={900}
								alt="gambar"
                                className='w-[1920px] py-10'
							></Image>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Hero;
import Image from 'next/image';
import { Lato } from 'next/font/google';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';

export default function CarouselCabinet({ props }: any) {
	return (
		<Swiper
			loop
			loopedSlides={1}
			slidesPerView="auto"
			modules={[Mousewheel, Navigation, Autoplay]}
			autoplay={{
				reverseDirection: true,
				delay: 2000,
				disableOnInteraction: true,
			}}
		>
			{props?.map((items: any) => {
				return (
					<SwiperSlide key={Math.random() * 100000} style={{ width: 'auto' }}>
						<div className={`relative mx-1 flex items-center justify-center `}>
							<div className="group relative h-[208px] w-[110px] transform overflow-hidden rounded-md border-[5px] bg-[#F8F8F8] transition-all hover:visible hover:w-[150px] hover:duration-[100ms] hover:ease-in lg:h-[380px] lg:w-[225px] lg:hover:w-[350px]">
								<h1
									className={`duration-400  h-[80px] skew-x-[8deg] py-2 px-4 text-center font-bold text-[#3F3F9C] transition-opacity ease-out group-hover:opacity-0 ${
										items.id == 'mka' || 'kpm' || 'psdma'
											? 'text-[17px]'
											: 'text-lg'
									}`}
								>
									{items.position}
								</h1>
								<h1 className="duration-400 absolute top-0 left-[50] h-[80px] w-full skew-x-[8deg] py-2 px-4 text-center text-xs font-bold text-[#3F3F9C] opacity-0 transition-opacity ease-in group-hover:opacity-100 lg:text-xl">
									{items.position}
								</h1>
								<div className="flex h-[322px] items-center justify-center ">
									<Image
										src={`/cabinet/core-team/${items.id}.png`}
										quality={100}
										alt={items.position}
										priority
										unoptimized={true}
										width={'122'}
										height="180"
										className={`filters absolute  -right-2 skew-x-[8deg] transform transition-transform duration-300 group-hover:right-[50%] group-hover:left-[50%] group-hover:h-[180px] group-hover:translate-x-[-50%] group-hover:filter-none lg:w-[220px] lg:group-hover:h-auto lg:group-hover:w-[230px] ${
											items.id == 'ceoOti' ? 'bottom-0 ' : ''
										}`}
									/>
								</div>
								<div className="absolute bottom-[0.5px] -left-[330px] h-[58px] w-[240px] bg-[#3F3F9C] text-[#F8F8F8] duration-[300ms] group-hover:translate-x-[335px] lg:h-[78px] lg:w-[330px]">
									<div className="flex skew-x-[8deg] flex-col justify-center px-4 pt-4 pb-2 text-xs font-semibold leading-tight lg:pt-2 lg:text-2xl">
										<h1 className="transition duration-200 group-hover:ease-linear">
											{items.name}
										</h1>
										<h2>2021</h2>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

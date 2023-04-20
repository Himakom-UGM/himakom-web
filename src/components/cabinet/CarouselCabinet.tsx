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


export default function CarouselCabinet({props}:any) {
  return(
    <Swiper 
      loop
      loopedSlides={1}
      slidesPerView= 'auto'
      modules= {[Autoplay]}
      autoplay = {{
		reverseDirection: true,
        delay: 2000,
		disableOnInteraction: true
      }}
	  mousewheel = {false}

    >
		{props?.map((items:any) => {
			return (
				<SwiperSlide style={{ width: 'auto' }} >
					<div
						className={`relative mx-1 flex items-center justify-center `}
          >
						<div className="group relative h-[208px] w-[110px] transform overflow-hidden rounded-md border-[5px] bg-[#F8F8F8] transition-all hover:visible hover:w-[150px] hover:duration-[100ms] hover:ease-in lg:h-[380px] lg:w-[225px] lg:hover:w-[350px]">
							<h1 className={`duration-400  h-[80px] skew-x-[8deg] py-2 px-4 leading-2 lg:leading-5 text-center font-bold text-[#3F3F9C] transition-opacity ease-out group-hover:opacity-0 ${(items.id === "mka") || (items.id === "psdma") || (items.id === "kpm")   ? "lg:text-[17px] text-[12px]" : "text-[14px]"}`}>
								{items.position}
							</h1>
							<h1 className="duration-400 w-full absolute top-0 left-[50] h-[80px] skew-x-[8deg] py-2 px-4 text-center text-sm font-bold text-[#3F3F9C] opacity-0 transition-opacity ease-in group-hover:opacity-100 lg:text-xl">
								{items.position}
							</h1>
							<div className="flex h-auto lg:h-[322px] items-center justify-center ">
								<Image
									src={`/cabinet/core-team/${items.id}.png`}
									quality={100}
									alt={items.position}
									priority
									unoptimized = {true}
									width={'122'}
									height="180"
									className = {`filters absolute bottom-0 h-[130px] w-auto lg:h-[300px] lg:w-auto lg:group-hover:h-[330px] lg:group-hover:w-auto -right-2 group-hover:h-[140px] group-hover:w-auto group-hover:filter-none group-hover:right-[50%] group-hover:left-[50%] transform group-hover:translate-x-[-50%]  transition-transform duration-300  skew-x-[8deg] ${items.id =="ceoOti" ? "bottom-0 " : ""}`}
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
  )
}

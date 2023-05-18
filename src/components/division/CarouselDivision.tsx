import Image from 'next/image';
import { Lato } from 'next/font/google';
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function CarouselDivision({ props }: any) {
	const [rendered, setRendered] = useState(false);
	useEffect(() => {
		setRendered(true);
	}, []);

	return (
		<>
			{rendered && (
				<Swiper
					freeMode
					slidesPerView="auto"
					modules={[Mousewheel, Navigation, Autoplay]}
					autoplay={{
						reverseDirection: false,
						delay: 2000,
						disableOnInteraction: true,
					}}
				>
					{props?.map((items: any) => {
						return (
							<SwiperSlide key={items.id} style={{ width: 'auto' }}>
								<div
									className={`relative mx-1 flex items-center justify-center `}
								>
									<div className="group relative h-[208px] w-[110px] transform overflow-hidden rounded-md border-[5px] bg-[#F8F8F8] transition-all hover:visible hover:w-[150px] hover:duration-[100ms] hover:ease-in lg:h-[380px] lg:w-[225px] lg:hover:w-[350px]">
										<h1
											className={`duration-400 h-[80px] skew-x-[8deg] leading-4 lg:leading-5 xl:leading-6 py-2 lg:px-4   text-center font-bold text-[#3F3F9C] transition-opacity ease-out group-hover:opacity-0 w-full ${
												(items.id == 'mka') || (items.id == 'kpm') || (items.id == 'psdma') 
													? 'lg:text-[17px] xl:text-[22px] text-[11px]'
													: 'lg:text-xl xl:text-2xl text-sm'
											}`}
										>
											{items.position}
										</h1>
										<h1 className={`duration-400 absolute top-0 left-[50] h-[80px] w-full skew-x-[8deg] py-2 px-4 leading-4 text-center font-bold text-[#3F3F9C] opacity-0 transition-opacity ease-in group-hover:opacity-100 ${
												(items.id == 'mka') || (items.id == 'kpm') || (items.id == 'psdma') 
													? 'text-sm lg:text-lg xl:text-xl'
													: 'text-base lg:text-xl xl:text-3xl'
											}`}>
											{items.position}
										</h1>
										<div className="flex h-[322px] items-center justify-center ">
											<Image
												src={items.photoUrl}
												quality={100}
												alt={items.position}
												priority
												unoptimized={true}
												width={'122'}
												height="180"
												className={`filters absolute  bottom-0 -right-2 skew-x-[8deg] transform transition-transform duration-300 group-hover:right-[50%] group-hover:left-[50%] group-hover:translate-x-[-50%] group-hover:filter-none h-[130px] w-auto lg:h-[290px] group-hover:h-[150px] lg:group-hover:h-[310px]`}
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
			)}
		</>
	);
}

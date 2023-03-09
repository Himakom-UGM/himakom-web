import Image from 'next/image';
import { Lato } from 'next/font/google';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const PHPI = [
	{
		id: 'makomji',
		position: 'Ketua Himakom',
		name: 'Kadek Ninda N.P',
	},
	{
		id: 'ceoOti',
		position: 'CEO OmahTI',
		name: 'Antonius Teddy K',
	},
	{
		id: 'sekjen',
		position: 'Sekretaris Jendral',
		name: 'Diki Bagastama',
	},
	{
		id: 'sekre',
		position: 'Sekretaris Umum',
		name: 'Maeve Zahwa A.C.K',
	},
	{
		id: 'bendahara',
		position: 'Bendahara Umum',
		name: 'Fahdgham Albar R',
	},
	{
		id: 'mka',
		position: 'Manajemen Kesekretariatan dan Alumni',
		name: 'Ronggo Tsani M',
	},
	{
		id: 'psdma',
		position: 'Pengenbangan Sumber Daya Manusia dan Advokasi',
		name: 'Gelora Damayanti M',
	},
	{
		id: 'hublu',
		position: 'Hubungan Luar',
		name: 'Rachel Naragifta',
	},
	{
		id: 'mikat',
		position: 'Minat dan Bakat',
		name: 'Konang Tyagazain N',
	},
	{
		id: 'kewirush',
		position: 'Kewirausahaan',
		name: 'Rhazes Wahyu R.S',
	},
	{
		id: 'kpm',
		position: 'Kerumahtanggan dan Pengabdian Masyarakat',
		name: 'Billy Fahd Qodama',
	},
	{
		id: 'po',
		position: 'Pengembangan Organisasi',
		name: 'Fadya Nabila F',
	},
];

export default function CarouselCabinet() {
  return(
    <Swiper 
      loop
      loopedSlides={1}
      slidesPerView= 'auto'
      modules= {[Mousewheel, Navigation, Autoplay]}
      autoplay = {{
		reverseDirection: true,
        delay: 2000,
		disableOnInteraction: false
      }}
    >
		{PHPI.map((items) => {
			return (
				<SwiperSlide style={{ width: 'auto' }} >
					<div
						className={`relative mx-1 flex items-center justify-center `}
					>
						<div className="group relative h-[208px] w-[110px] transform overflow-hidden rounded-md border-[5px] bg-[#F8F8F8] transition-all hover:visible hover:w-[150px] hover:duration-[100ms] hover:ease-in lg:h-[380px] lg:w-[225px] lg:hover:w-[350px]">
							<h1 className="duration-400 h-[80px] skew-x-[8deg] py-2 px-4 text-center text-xs font-bold text-[#3F3F9C] transition-opacity ease-out group-hover:opacity-0 lg:text-xl">
								{items.position}
							</h1>
							<h1 className="duration-400 absolute top-0 left-[50] h-[80px] w-full skew-x-[8deg] py-2 px-4 text-center text-xs font-bold text-[#3F3F9C] opacity-0 transition-opacity ease-in group-hover:opacity-100 lg:text-xl">
								{items.position}
							</h1>
							<div className="flex h-[322px] items-center justify-center ">
								<Image
									src={`/cabinet/core-team/${items.id}.svg`}
									quality={100}
									alt=""
									width={'122'}
									height="180"
									className="filters absolute -bottom-8 -right-2 group-hover:h-[180px] group-hover:filter-none group-hover:bottom-0 group-hover:right-[50%] group-hover:left-[50%] transform group-hover:translate-x-[-50%] lg:w-[220px] transition-transform duration-300 lg:group-hover:h-auto lg:group-hover:w-[230px] skew-x-[8deg] "
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

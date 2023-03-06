import Image from 'next/image';
import { Lato } from 'next/font/google';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const lato = Lato({
	subsets: ['latin'],
	display: 'optional',
	weight: '400',
});

export const PHPI = [
	{
		id: 'makomji',
		position: 'Ketua Himakom',
		name: 'Kadek Ninda N.P',
	},
	{
		id: 'ceo-oti',
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
		name: 'Ronggo Tsani M 8=>',
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
      loopedSlides={7}
      slidesPerView= 'auto'
      modules= {[Mousewheel, Navigation, Autoplay]}
      mousewheel ={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      watchOverflow = {true}
      slidesPerGroup = {13}
      autoplay = {{
        delay: 500,
      }}
    >
		{PHPI.map((items) => {
			return (
				<SwiperSlide style={{ width: 'auto' }} >
					<div
						className={`relative mx-1 flex items-center justify-center ${lato.className}  `}
					>
						<div className="group relative h-[220px] w-[110px] transform overflow-hidden rounded-md border-[5px] bg-[#F8F8F8] transition-all hover:visible hover:w-[150px] hover:duration-[100ms] hover:ease-in lg:h-[360px] lg:w-[180px] lg:hover:w-[320px]">
							<h1 className="duration-400 h-[80px] skew-x-[8deg] py-2 px-4 text-center text-xs font-bold text-[#3F3F9C] transition-opacity ease-out group-hover:opacity-0 lg:text-xl">
								{items.position}
							</h1>
							<h1 className="duration-400 absolute top-0 left-[50] h-[80px] w-full skew-x-[8deg] py-2 px-4 text-center text-xs font-bold text-[#3F3F9C] opacity-0 transition-opacity ease-in group-hover:opacity-100 lg:text-xl">
								{items.position}
							</h1>
							<div className="flex h-[322px] items-center justify-center">
								<Image
									src={'/about/Kadek2.png'}
									quality={100}
									alt=""
									width={'122'}
									height="180"
									className="filters absolute bottom-0 group-hover:h-[180px] group-hover:w-auto group-hover:filter-none lg:w-[208px] lg:group-hover:h-[300px]"
								/>
							</div>
							<div className="absolute bottom-[0.5px] -left-[320px] h-[58px] w-[210px] bg-[#3F3F9C] text-[#F8F8F8] duration-[300ms] group-hover:translate-x-[320px] lg:h-[78px] lg:w-[310px]">
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

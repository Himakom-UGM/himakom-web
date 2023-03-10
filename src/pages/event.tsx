import Head from 'next/head';
import Image from 'next/image';
import FotoAngkatan from 'public/images/bg/foto_angkatan.png';
import TextureEvent from 'public/images/bg/texture_page_events.png';
import Pattern from 'public/images/bg/patternpad.png';
// import DropDown from 'public/images/icon/dropDown.svg';
import FindArticle from 'src/components/detail-post/Searchbutton';
import img_Mikat from 'public/images/bg/Image_Mikat.png';
import img_KPM from 'public/images/bg/image_KPM.png';
import img_Hublu from 'public/images/bg/image_Hublu.png';
import img_PO from 'public/images/bg/image_PO.png';
import type { StaticImageData } from 'next/image';
import React from 'react';
// import { BiChevronDown } from 'react-icons/bi';

interface GridComponentProps {
	image: string | StaticImageData;
	divisi: string;
}

const GridComponent = ({ image, divisi }: GridComponentProps) => {
	return (
		<a href="">
			<div className="flex h-[139px] w-[264px] rounded-[10px] bg-[#FFFFFF] md:h-[386px] md:w-[285px]">
				<div className="flex flex-row md:flex-col">
					<div className="w-full items-center justify-center">
						<Image
							src={image}
							quality={100}
							alt="hero"
							className="h-[139px] w-[108px] rounded-l-[10px] object-cover md:hidden md:h-[182px] md:w-[285px]"
						/>
						<Image
							src={image}
							quality={100}
							alt="hero"
							className="hidden h-[139px] w-[108px] rounded-t-[10px] object-cover md:flex md:h-[182px] md:w-[285px]"
						/>
						<div className="flex h-[16px] w-[56px] -translate-y-7 translate-x-9 items-center justify-center rounded-[20px] bg-[#F3BE00] md:hidden">
							<span className="text-[10px] font-bold text-[#FFFFFF] md:text-[12px]">
								{divisi}
							</span>
						</div>
					</div>
					<div className="flex translate-x-2 flex-col justify-center md:p-3">
						<div className="flex flex-col -space-y-1">
							<div className="flex flex-row ">
								<div className="text-[16px] font-bold text-[#32327B] md:text-[24px]">
									Lorem Ipsum
								</div>
								<div className="hidden h-[22px] w-[79px] translate-x-4 translate-y-2 items-center justify-center rounded-[20px] bg-[#F3BE00] md:flex">
									<span className="text-[10px] font-bold text-[#FFFFFF] md:text-[12px]">
										{divisi}
									</span>
								</div>
							</div>
							<div className="text-[10px] font-bold text-[#32327B] md:text-[12px]">
								02/05/2021
							</div>
						</div>
						<div className="flex flex-col md:gap-4">
							<div className="h-[44px] w-[144px] text-[9px] md:w-[257px] md:text-[12px]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								eu turpis molestie, dictum est a, mattis tellus.{' '}
							</div>
							<div className="flex h-5"></div>
							<div className="text-[10px] text-[#32327B] md:text-[12px]">
								Read more..
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
};

// const [isOpen, setIsOpen] = useState(false);
// return (

// )

export default function Event() {
	return (
		<>
			<Head>
				<title>Event</title>
			</Head>
			<main></main>
		</>
	);
}

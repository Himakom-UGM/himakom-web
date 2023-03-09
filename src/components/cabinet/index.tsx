import ButtonDivision from './ButtonDivision';
import CarouselCabinet from './CarouselCabinet';
import CubeDivision from './CubeDivision';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import { PHPI } from './CarouselCabinet';
import Router, { useRouter } from 'next/router';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { useTexture, OrbitControls } from '@react-three/drei';


function LegendStructure() {
	return (
		<>
			{PHPI.map((items, index) => {
				return (
					<div className="flex items-center px-2 pb-1 xl:pb-3" key={index}>
						<Image
							src={`/cabinet/division/${items.id}Biru.svg`}
							alt=""
							width={14}
							height={12}
							className="filter"
						/>
						<h4 className="pl-3 text-start text-[10px] font-bold lg:text-md xl:text-xl">
							{items.position}
						</h4>
					</div>
				);
			})}
		</>
	);
}

export default function CabinetPage() {
	return (
		<>
			<main className={`overflow-x-hidden`}>
				<div className="bg-[#3F3F9C]">
					<div className="relative  z-0 h-full">
						<Image
							src={'/cabinet/cabinetBackground.svg'}
							alt=""
							quality={100}
							width="240"
							height="240"
							className=" absolute top-0 right-0 -z-[9999] xl:w-[350px]"
						/>
						<Image
							src={'/cabinet/cabinetBackground2.svg'}
							alt=""
							quality={100}
							width="240"
							height="240"
							className=" absolute bottom-0 left-0 -z-[9999] xl:w-[350px]"
						/>
						<div className="z-1 flex items-center justify-center pt-8 pb-32  xl:px-48 xl:py-44">
							<div className="flex h-full w-9/12 max-w-[1056px] justify-center rounded-3xl bg-white shadow-[0px_4px_16px_rgba(33,33,82,0.25)] xl:w-full">
								<div className="hidden lg:w-[1200px] xl:w-[1900px] items-center justify-center xl:px-16 lg:px-12 lg:py-12 lg:flex">
									<Image
										src={'/cabinet/logo-kabinet.svg'}
										alt=""
										quality={100}
										width={300}
										height={245}
										style={{
											width: '100%'
										}}
									/>
								</div>
								<div className="flex flex-col justify-center">
									<h1 className="p-6 text-center  text-xl font-bold lg:px-0 lg:pb-2 xl:pt-12 lg:text-start xl:text-5xl">
										Arundaya Cakrabuana
									</h1>
									<h2 className="hidden font-semibold lg:block xl:text-2xl">
										Himakom Periode 2023/2024
									</h2>
									<div className="flex items-center justify-center ">
										<Image
											src={'/cabinet/logo-kabinet.svg'}
											alt=""
											quality={100}
											width="140"
											height="130"
											className="block lg:hidden"
										/>
									</div>
									<p className="p-6 text-justify text-[10px] font-medium xl:w-11/12 xl:px-0 xl:py-8 xl:text-xl xl:leading-6 lg:pl-0 lg:py-3 lg:pr-12">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
										dignissim, metus nec fringilla accumsan, risus sem
										sollicitudin lacus, ut interdum tellus elit sed risus.
										Maecenas eget condimentum velit, sit amet feugiat lectus.
										Class aptent taciti sociosqu ad litora torquent per conubia
										nostra, per inceptos himenaeos. Praesent auctor purus luctus
										enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
										ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
										vel bibendum lorem. Morbi convallis convallis diam sit amet
										lacinia. Aliquam in elementum tellus.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative z-0 flex h-auto flex-col items-center justify-start pb-20">
					<Image
						src={'/cabinet/cabinetBGDecoration.svg'}
						alt=""
						quality={100}
						width="180"
						height="180"
						className=" absolute top-0 right-0 -z-[9999] lg:hidden"
					/>
					<Image
						src={'/cabinet/cabinetBGDecoration2.svg'}
						alt=""
						quality={100}
						width="240"
						height="240"
						className=" absolute bottom-0 left-0 -z-[9999] lg:hidden"
					/>
					<Image
						src={'/cabinet/cabinetBackground3.png'}
						alt=""
						quality={100}
						fill
						objectFit="cover"
						className=" absolute bottom-0 left-0 -z-[9999]"
					/>
					<h1 className="my-8 rounded-3xl bg-[#F8F8F8] py-3 px-[45px] shadow-[0px_4px_16px_rgba(33,33,82,0.25)] lg:my-14 lg:bg-transparent lg:text-5xl lg:font-bold lg:shadow-none ">
						Cabinet Structure
					</h1>
					<Image
						src={'/cabinet/structureCabinet.svg'}
						alt=""
						quality={100}
						width="240"
						height="280"
						className="pb-11 lg:hidden"
					/>
					<div className="z-0 flex w-9/12 max-w-[1260px] rounded-3xl border-2 bg-[#F8F8F8] text-[#3F3F9C] shadow-[0px_4px_16px_rgba(33,33,82,0.25)] lg:justify-center">
						<Image
							src={'/cabinet/structureCabinet.svg'}
							alt=""
							quality={100}
							width="240"
							height="280"
							className="hidden xl:w-[612px] xl:px-14 xl:py-[136px] lg:w-[400px] lg:px-8 lg:py-0 lg:block"
						/>
						<div className="flex flex-col lg:w-1/3 lg:py-10">
							<h3 className="pt-3 pb-6 text-center text-xs font-bold lg:text-lg xl:text-2xl">
								Keterangan
							</h3>
							<div className="flex flex-col items-start lg:border-l-2 xl:border-l-4 border-[#3F3F9C] px-2 pb-2 lg:text-lg xl:text-xl xl:pl-4">
								<LegendStructure />
							</div>
						</div>
					</div>
				</div>
				<div className="relative flex h-[640px] flex-col items-center justify-center bg-[#3F3F9C]">
					<Image
						src={'/cabinet/coreBackground.png'}
						alt=""
						quality={100}
						fill
						objectFit="contain"
						objectPosition="bottom"
						className="lg:hidden"
					/>
					<Image
						src={'/cabinet/coreBackground2.png'}
						alt=""
						quality={100}
						fill
						objectFit="contain"
						objectPosition="right"
						className="absolute hidden lg:block"
					/>
					<div
						className="absolute bottom-0 z-20 hidden h-full w-full bg-[#3F3F9C]/50 lg:block"
						style={{
							background:
								'linear-gradient(90deg, #3F3F9C 53.44%, rgba(63, 63, 156, 0.4) 100%)',
						}}
					></div>
					<h1 className="z-30 pb-10 text-center text-2xl font-bold text-[#F8F8F8] lg:text-5xl">
						Core Team
					</h1>
					<div className="z-30 flex w-full -skew-x-[8deg] p-4">
						<CarouselCabinet />
					</div>
				</div>
				<div className="relative flex h-full flex-col justify-center py-14">
					<Image
						src={'/cabinet/cabinetBGDecoration.svg'}
						alt=""
						quality={100}
						width="180"
						height="180"
						className=" absolute top-0 right-0 -z-[9999]  lg:hidden"
					/>
					<Image
						src={'/cabinet/cabinetBGDecoration2.svg'}
						alt=""
						quality={100}
						width="240"
						height="240"
						className=" absolute bottom-0 left-0 -z-[9999] lg:hidden"
					/>
					<h1 className="pt-14 pb-3 text-center text-3xl font-bold xl:text-[52px]">
						Divisions
					</h1>
					<p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
						incididunt ut labore et dolore magna aliqua.</p>
					<div className="flex w-full flex-row flex-wrap items-center justify-center">
					</div>
					<div className="relative">
						<Canvas
							camera={{ position: [0, 0, 5] }}
							style={{ width: `100%`, height: `500px`, position: `relative` }}
						>
							<ambientLight intensity={1.1} />
							<directionalLight />
							<CubeDivision position={[0, 0, 0]} />
							<OrbitControls enableZoom={false} minZoom={10} />
						</Canvas>
					</div>
					<Image
						src={'/cabinet/circleDecoration.svg'}
						alt=""
						quality={100}
						width="240"
						height="240"
						className=" absolute top-0 left-0 -z-[9999]"
					/>
					<Image
						src={'/cabinet/circleDecoration2.svg'}
						alt=""
						quality={100}
						width="150"
						height="150"
						className=" absolute top-[10%] right-[15%] -z-[9999]"
					/>
					<Image
						src={'/cabinet/rectangleDecoration.svg'}
						alt=""
						quality={100}
						width="240"
						height="240"
						className=" absolute bottom-0 right-0 -z-[9999]"
					/>
					<Image
						src={'/cabinet/rectangleDecoration2.svg'}
						alt=""
						quality={100}
						width="180"
						height="180"
						className=" absolute bottom-[7%] left-[20%] -z-[9999]"
					/>
					{/* <CubeDivision /> */}
				</div>
			</main>
		</>
	);
}



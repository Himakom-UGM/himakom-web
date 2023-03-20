import ButtonDivision from './ButtonDivision';
import CarouselCabinet from './CarouselCabinet';
import CubeDivision from './CubeDivision';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import Router, { useRouter } from 'next/router';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import {
	useTexture,
	OrbitControls,
	AccumulativeShadows,
	RandomizedLight,
	Environment,
	Stars,
} from '@react-three/drei';

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
						<h4 className="lg:text-md pl-3 text-start text-[10px] font-bold xl:text-xl">
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
						<div className="z-1 flex items-center justify-center pt-20 pb-32  xl:px-48 xl:py-44">
							<div className="flex h-full w-9/12 max-w-[1056px] justify-center rounded-3xl bg-white shadow-[0px_4px_16px_rgba(33,33,82,0.25)] xl:w-full">
								<div className="hidden items-center justify-center lg:flex lg:w-[1200px] lg:px-12 lg:py-12 xl:w-[1900px] xl:px-16">
									<Image
										src={'/cabinet/logo-kabinet.svg'}
										alt=""
										quality={100}
										width={300}
										height={245}
										style={{
											width: '100%',
										}}
									/>
								</div>
								<div className="flex flex-col justify-center">
									<h1 className="p-6 text-center  text-xl font-bold lg:px-0 lg:pb-2 lg:text-start xl:pt-12 xl:text-5xl">
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
									<p className="p-6 text-justify font-medium lg:py-3 lg:pl-0 lg:pr-12 xl:w-11/12 xl:px-0 xl:py-8 xl:text-xl xl:leading-6">
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
							className="hidden lg:block lg:w-[400px] lg:px-8 lg:py-0 xl:w-[612px] xl:px-14 xl:py-[136px]"
						/>
						<div className="flex flex-col lg:w-1/3 lg:py-10">
							<h3 className="pt-3 pb-6 text-center text-xs font-bold lg:text-lg xl:text-2xl">
								Keterangan
							</h3>
							<div className="flex flex-col items-start border-[#3F3F9C] px-2 pb-2 lg:border-l-2 lg:text-lg xl:border-l-4 xl:pl-4 xl:text-xl">
								<LegendStructure />
							</div>
						</div>
					</div>
				</div>
				<div className="relative flex h-[640px] flex-col items-center justify-center bg-[#3F3F9C] px-0 sm:px-5 lg:px-8 xl:px-1 2xl:px-0">
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
					<div className="z-30 flex w-full -skew-x-[8deg] px-8 ">
						<CarouselCabinet props={PHPI} />
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
					<p className="text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className="flex w-full flex-row flex-wrap items-center justify-center"></div>
					<div className="relative">
						<Canvas
							camera={{ position: [0, 0, 5] }}
							style={{ width: `100%`, height: `390px`, position: `relative` }}
						>
							<ambientLight intensity={1.2} />
							<directionalLight />
							<hemisphereLight args={[0xffffbb, 0x080820, 1]} />

							<CubeDivision position={[0, 0, 0]} />
							<OrbitControls enableZoom={false} minZoom={10} autoRotate />
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

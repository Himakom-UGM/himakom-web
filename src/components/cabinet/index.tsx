import ButtonDivision from './ButtonDivision';
import CarouselCabinet from './CarouselCabinet';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import { PHPI } from './CarouselCabinet';
import { Canvas, useFrame, useLoader,  } from '@react-three/fiber';

import { useRef } from 'react';
import { useTexture } from '@react-three/drei';

const lato = Lato({
	subsets: ['latin'],
	display: 'optional',
	weight: '400',
});

function LegendStructure() {
	return (
		<>
			{PHPI.map((items, index) => {
				return (
					<div className="flex items-center px-2 pb-2 lg:pb-3" key={index}>
						<Image
							src={`/cabinet/${items.id}.svg`}
							alt=""
							width={14}
							height={12}
							className="filter "
						/>
						<h4 className="pl-3 text-start text-[10px] font-bold lg:text-xl">
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
			<main className={`${lato.className} overflow-x-hidden`}>
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
							<div className="flex h-full w-9/12 max-w-[1056px] rounded-3xl bg-white shadow-[0px_4px_16px_rgba(33,33,82,0.25)] xl:w-full">
								<div className=" hidden items-center justify-center px-16 xl:flex">
									<Image
										src={'/cabinet/logo-kabinet.svg'}
										alt=""
										quality={100}
										width={1900}
										height={245}
									/>
								</div>
								<div className="">
									<h1 className="p-6 text-center  text-xl font-bold xl:px-0 xl:pb-2 xl:pt-12 xl:text-start xl:text-5xl">
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
											className="block xl:hidden"
										/>
									</div>
									<p className="p-6 text-justify text-[10px] font-medium xl:w-11/12 xl:px-0 xl:py-8 xl:text-xl xl:leading-6">
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
						className=" absolute top-0 right-0 -z-[9999]"
					/>
					<Image
						src={'/cabinet/cabinetBGDecoration2.svg'}
						alt=""
						quality={100}
						width="240"
						height="240"
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
					<div className="z-0 flex w-9/12 rounded-3xl border-2 bg-[#F8F8F8] text-[#3F3F9C] shadow-[0px_4px_16px_rgba(33,33,82,0.25)] lg:justify-center">
						<Image
							src={'/cabinet/structureCabinet.svg'}
							alt=""
							quality={100}
							width="240"
							height="280"
							className="hidden w-[612px] px-14 py-[136px] lg:block"
						/>
						<div className="flex flex-col lg:w-1/3 lg:py-10">
							<h3 className="pt-3 pb-6 text-center text-xs font-bold lg:text-2xl">
								Keterangan
							</h3>
							<div className="flex flex-col items-start border-l-4 border-[#3F3F9C] px-2 pb-2 lg:text-xl xl:pl-4">
								<LegendStructure />
							</div>
						</div>
					</div>
				</div>
				<div className="relative flex h-[640px] flex-col items-center justify-center overflow-hidden bg-[#3F3F9C]">
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
						className="absolute"
					/>
					<div
						className="absolute z-20 h-full w-full bg-[#3F3F9C]/50"
						style={{
							background:
								'linear-gradient(90deg, #3F3F9C 53.44%, rgba(63, 63, 156, 0.4) 100%)',
						}}
					></div>
					<h1 className="z-30 pb-10 text-center text-2xl font-bold text-[#F8F8F8] lg:text-5xl">
						Core Team
					</h1>
					<div className="z-30 mx-[370px] flex w-full  overflow-hidden  p-4">
						<CarouselCabinet />
					</div>
				</div>
				<div className="relative flex h-[640px] flex-col justify-center">
					<Image
						src={'/cabinet/cabinetBGDecoration.svg'}
						alt=""
						quality={100}
						width="180"
						height="180"
						className=" absolute top-0 right-0 -z-[9999]"
					/>
					<Image
						src={'/cabinet/cabinetBGDecoration2.svg'}
						alt=""
						quality={100}
						width="240"
						height="240"
						className=" absolute bottom-0 left-0 -z-[9999]"
					/>
					<h1 className="mb-12 text-center text-3xl font-bold">Divisions</h1>
					<div className="flex w-full flex-row flex-wrap items-center justify-center">
						<ButtonDivision />
					</div>
					<Canvas>
						<ambientLight intensity={0.7} />
            <directionalLight />
						<Box position={[0, 0, 0]} />
					</Canvas>
				</div>
			</main>
		</>
	);
}

function Box(props: any) {
  const hubluTexture = useTexture({
    map: '/cabinet/textures/Hublu.png',
  })
  const kewirushTexture = useTexture({
    map: '/cabinet/textures/Kewirush.png',
  })
  const kpmTexture = useTexture({
    map: '/cabinet/textures/KPM.png',
  })
  const mikatTexture = useTexture({
    map: '/cabinet/textures/Mikat.png',
  })
  const poTexture = useTexture({
    map: '/cabinet/textures/PO.png',
  })
  const psdmaTexture = useTexture({
    map: '/cabinet/textures/PSDMA.png',
  })
  
  

	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
	return (
		<mesh {...props} ref={mesh}>
    <boxGeometry args={[3, 3, 3]} />
			<meshStandardMaterial  {...hubluTexture} attach="material-0" />
      <meshStandardMaterial  {...kewirushTexture} attach="material-1"/>
      <meshStandardMaterial  {...kpmTexture} attach="material-2"/>
      <meshStandardMaterial  {...mikatTexture} attach="material-3"/>
      <meshStandardMaterial  {...poTexture} attach="material-4"/>
      <meshStandardMaterial  {...psdmaTexture} attach="material-5"/>




		</mesh>
	);
}

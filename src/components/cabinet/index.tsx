import ButtonDivision from './ButtonDivision';
import CarouselCabinet from './CarouselCabinet';
import CubeDivision from './CubeDivision';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import Router, { useRouter } from 'next/router';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import {
	useTexture,
	OrbitControls,
	AccumulativeShadows,
	RandomizedLight,
	Environment,
	Stars,
} from '@react-three/drei';
import { phpiData as PHPI } from './data';

import CabinetAbout from './CabinetAbout';
import CabinetStructure from './CabinetStructure';

export default function CabinetPage() {
	const [rendered, setRendered] = useState(false);
	useEffect(() => {
		setRendered(true);
	}, []);

	return (
		<>
			{rendered && (
				<main className={`overflow-x-hidden`}>
					<div className="bg-[#3F3F9C]">
						<div className="relative z-0 h-full pt-24 pb-12">
							<Image
								src={'/main/cabinet/cabinetBackground.svg'}
								alt=""
								quality={100}
								width="240"
								height="240"
								className=" absolute top-0 right-0 -z-[9999] xl:w-[350px]"
							/>
							<Image
								src={'/main/cabinet/cabinetBackground2.svg'}
								alt=""
								quality={100}
								width="240"
								height="240"
								className=" absolute bottom-0 left-0 -z-[9999] xl:w-[350px]"
							/>
							<CabinetAbout />
						</div>
					</div>
					<CabinetStructure />
					<div className="relative flex h-[640px] flex-col items-center justify-center bg-[#3F3F9C] px-0 sm:px-5 lg:px-8 xl:px-1 2xl:px-0">
						<Image
							src={'/main/cabinet/coreBackground.png'}
							alt=""
							quality={100}
							fill
							className="object-contain object-bottom lg:hidden"
						/>
						<Image
							src={'/main/cabinet/coreBackground2.png'}
							alt=""
							quality={100}
							fill
							className="absolute hidden object-contain object-right lg:block"
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
							src={'/main/cabinet/cabinetBGDecoration.svg'}
							alt=""
							quality={100}
							width="180"
							height="180"
							className=" absolute top-0 right-0 -z-[9999]  lg:hidden"
						/>
						<Image
							src={'/main/cabinet/cabinetBGDecoration2.svg'}
							alt=""
							quality={100}
							width="240"
							height="240"
							className=" absolute bottom-0 left-0 -z-[9999] lg:hidden"
						/>
						<h1 className="pt-14 pb-3 text-center text-3xl lg:text-5xl font-bold">
							Divisions
						</h1>
						<p className="text-center lg:text-xl">
							Berikut adalah divisi dari kepengurusan HIMAKOM.{' '}
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
							src={'/main/cabinet/circleDecoration.svg'}
							alt=""
							quality={100}
							width="240"
							height="240"
							className=" absolute top-0 left-0 -z-[9999]"
						/>
						<Image
							src={'/main/cabinet/circleDecoration2.svg'}
							alt=""
							quality={100}
							width="150"
							height="150"
							className=" absolute top-[10%] right-[15%] -z-[9999]"
						/>
						<Image
							src={'/main/cabinet/rectangleDecoration.svg'}
							alt=""
							quality={100}
							width="240"
							height="240"
							className=" absolute bottom-0 right-0 -z-[9999]"
						/>
						<Image
							src={'/main/cabinet/rectangleDecoration2.svg'}
							alt=""
							quality={100}
							width="180"
							height="180"
							className=" absolute bottom-[7%] left-[20%] -z-[9999]"
						/>
						{/* <CubeDivision /> */}
					</div>
				</main>
			)}
		</>
	);
}

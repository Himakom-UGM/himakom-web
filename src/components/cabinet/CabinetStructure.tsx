import Image from 'next/image';
import { phpiData as PHPI } from './data';

export default function CabinetStructure() {
	return (
		<div className="relative z-0 flex h-auto flex-col items-center justify-start pb-20">
			<Image
				src={'/main/cabinet/cabinetBGDecoration.svg'}
				alt=""
				quality={100}
				width="180"
				height="180"
				className=" absolute top-0 right-0 -z-[9999] lg:hidden"
			/>
			<Image
				src={'/main/cabinet/cabinetBGDecoration2.svg'}
				alt=""
				quality={100}
				width="240"
				height="240"
				className=" absolute bottom-0 left-0 -z-[9999] lg:hidden"
			/>
			<Image
				src={'/main/cabinet/cabinetBackground3.png'}
				alt=""
				quality={100}
				fill
				className="absolute bottom-0 left-0 -z-[9999] object-cover"
			/>
			<h1 className="my-8 rounded-3xl bg-[#F8F8F8] py-3 px-[45px] text-2xl font-semibold shadow-[0px_4px_16px_rgba(33,33,82,0.25)] lg:my-14 lg:bg-transparent lg:text-5xl lg:font-bold lg:shadow-none ">
				Cabinet Structure
			</h1>
			<Image
				src={'/main/cabinet/structureCabinet.svg'}
				alt=""
				quality={100}
				width="240"
				height="280"
				className="pb-11 lg:hidden"
			/>
			<div className="z-0 flex w-[80%] max-w-[1260px] justify-center rounded-3xl border-2 bg-[#F8F8F8] py-4 text-[#3F3F9C] shadow-[0px_4px_16px_rgba(33,33,82,0.25)] lg:justify-center">
				<div className="relative md:basis-2/3 flex justify-center items-center">
					<Image
						src={'/main/cabinet/structureCabinet.svg'}
						alt=""
						quality={100}
						width={240}
						height={280}
						className="mx-auto hidden md:w-[60%] lg:block"
					/>
				</div>
				<div className="mx-auto w-full justify-start flex md:basis-1/3 flex-col items-center md:justify-center border-[#3F3F9C] lg:my-10 lg:border-l-2 xl:border-l-4">
					<h3 className="pt-3 pb-4 text-center text-xl font-bold lg:text-2xl">
						Keterangan
					</h3>
					<div className="flex flex-col pl-5 md:pl-0 w-full md:w-fit items-start pb-2 lg:text-lg xl:pl-4 xl:text-xl">
						<LegendStructure />
					</div>
				</div>
			</div>
		</div>
	);
}

function LegendStructure() {
	return (
		<>
			{PHPI.map((items, index) => {
				return (
					<div className="my-1 flex items-center px-2 pb-1 xl:pb-3" key={index}>
						<Image
							src={`/main/cabinet/division/${items.id}Biru.svg`}
							alt=""
							width={14}
							height={12}
							className="filter"
						/>
						<h4 className="lg:text-md max-w-[180px] pl-3 text-start text-[12px] font-bold leading-4 xl:text-xl">
							{items.position}
						</h4>
					</div>
				);
			})}
		</>
	);
}
import Image from 'next/image';
import CarouselCabinet from '../cabinet/CarouselCabinet';
import { phpiData } from '../cabinet/data';
import { AnySoaRecord } from 'dns';
import { Entry } from 'contentful';
import CarouselDivision from './CarouselDivision';

type MembersType = {
	idKey: string;
};

export default function Members({ data }: { data: any }) {
	return (
		<div className="max-w-screen relative flex py-16  flex-col items-center justify-start overflow-x-hidden bg-[#3F3F9C] px-0 sm:px-5 lg:px-8 xl:px-1 2xl:px-0">
			<Image
				src={'/main/cabinet/coreBackground.png'}
				alt=""
				quality={100}
				fill
				style={{
					objectFit: 'contain',
					objectPosition: 'bottom',
				}}
				className="lg:hidden"
			/>
			<Image
				src={'/main/cabinet/coreBackground2.png'}
				alt=""
				quality={100}
				fill
				style={{
					objectFit: 'contain',
					objectPosition: 'right',
				}}
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
				Division Members
			</h1>
			<div className="z-30 flex w-full -skew-x-[8deg] p-4 ">
				{data && (
					<CarouselDivision
						props={data.map((member: Entry<any>) => {
							return {
								id: member.sys.id,
								name: member.fields.name,
								position: member.fields.role,
								photoUrl: 'https:'+member.fields.photo.fields.file.url,
							};
						})}
					/>
				)}
			</div>
		</div>
	);
}

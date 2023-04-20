import LogoHimakom from '@/svg/logo-himakom';
import Image from 'next/image';
import Link from 'next/link';

export default function HimakomBrand() {
	return (
		<Link href='/'>
			<div className="z-30 flex items-center gap-x-4 bg-[#f0f0f0] py-2 text-xl font-semibold xl:text-[26px]">
				<Image
					src="/main/logo.svg"
					alt="Himakom UGM"
					width={50}
					height={50}
					className="w-7 lg:w-9"
				/>
				<h1>Himakom UGM</h1>
			</div>
		</Link>
	);
}

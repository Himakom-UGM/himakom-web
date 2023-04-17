import LogoHimakom from "@/svg/logo-himakom";
import Image from "next/image";

export default function HimakomBrand() {
	return (
		<div className="flex gap-x-2 items-center py-2 font-semibold text-lg lg:text-xl z-30 bg-[#f0f0f0]">
			<Image src='/main/logo.svg' alt='Himakom UGM' width={50} height={50} className="w-7 lg:w-8"/>
            <h1>Himakom UGM</h1>
		</div>
	);
}

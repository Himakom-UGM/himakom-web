import LogoHimakom from "@/svg/logo-himakom";
import Image from "next/image";

export default function HimakomBrand() {
	return (
		<div className="flex gap-x-2 items-center font-semibold text-lg lg:text-xl">
			<Image src='/logo.svg' alt='Himakom UGM' width={50} height={50} className="w-9 lg:w-10"/>
            <h1>Himakom UGM</h1>
		</div>
	);
}

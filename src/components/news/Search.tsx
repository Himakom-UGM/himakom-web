import Image from 'next/image';

export default function Search() {
	return (
		<div className="relative">
			<input
				type="text"
				placeholder="Find Other Article "
				className="w-full rounded-3xl border-[1.5px] border-black py-[6px] px-4 text-lg outline-none placeholder:text-[#252525]"
			/>
			<Image
				src="/assets/search.svg"
				width={50}
				height={50}
				alt="search"
				className="absolute right-5 top-1/2 w-5 -translate-y-1/2"
			/>
		</div>
	);
}

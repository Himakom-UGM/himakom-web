import Image from 'next/image';

function ArrowUp() {
	return (
		<Image
			src="/main/assets/arrow-up.svg"
			width={20}
			height={20}
			alt="arrow"
			className="w-5"
		/>
	);
}

function ArrowDown() {
	return (
		<Image
			src="/main/assets/arrow-down.svg"
			width={20}
			height={20}
			alt="arrow"
			className="w-5"
		/>
	);
}

export { ArrowUp, ArrowDown };

import Image from 'next/image';

import segitiga from '../../../../public/assets/division/segitiga.png';
import buletan from '../../../../public/assets/division/buletan.png';

export default function Bottom_H() {
	return (
		<div>
			<Image
				src={segitiga}
				alt="segitiga"
				className="absolute bottom-0 left-0 z-0  h-auto w-[300px] md:w-[450px]"
			></Image>
			<Image
				src={buletan}
				alt="lingkaran"
				className="absolute top-0 right-0 z-0 h-auto w-[300px] md:w-[450px]"
			></Image>
		</div>
	);
}

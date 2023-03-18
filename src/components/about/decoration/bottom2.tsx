import Image from 'next/image';

import bg_1 from '../../../../public/assets/division/bottom_1.png';
import bg_2 from '../../../../public/assets/division/bottom_2.png';

import segitiga from '../../../../public/assets/division/segitiga.png';
import buletan from '../../../../public/assets/division/buletan.png';

import bg_3 from '../../../../public/assets/division/bg_11.png';
import bg_4 from '../../../../public/assets/division/bg_22.png';

export default function Bottom_P() {
	return (
		<div>
			<Image
				src={segitiga}
				alt="bg_mobile1"
				className="absolute bottom-0 left-0 z-0  h-auto w-[300px] lg:hidden"
			></Image>
			<Image
				src={buletan}
				alt="bg_mobile2"
				className="absolute top-0 right-0 z-0 h-auto w-[300px] lg:hidden"
			></Image>
			<Image
				src={bg_1}
				alt="bt_1"
				className="absolute bottom-0 left-0 z-20 hidden h-auto w-[320px] lg:block"
			></Image>
			<Image
				src={bg_2}
				alt="bt_2"
				className="absolute bottom-0 -right-[1px] z-20 hidden h-auto w-[320px] lg:block"
			></Image>
			<Image
				src={bg_3}
				alt="bg_1"
				className="absolute left-0 z-0 hidden h-auto w-[900px] lg:block"
			></Image>
			<Image
				src={bg_4}
				alt="bg_2"
				className="absolute  right-0 -top-20 z-0  hidden h-auto w-[900px] lg:block"
			></Image>
		</div>
	);
}

import Image from 'next/image';

type PropsDivision = {
	title: string;
	description: string;
	image: string;
	logo: string;
};

import segitiga from '../../../public/assets/division/segitiga.png';
import buletan from '../../../public/assets/division/buletan.png';

const data = {
	title: 'Kewirausahaan',
	logo: '/main/Logos_kewirus.png',
	image: '/main/Hero.png',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam incidunt cumque, delectus nostrum nulla aliquid nobis ad itaque suscipit illum harum totam veritatis dolorum ex repellat voluptas magnam et dolorem ipsa vitae quo fuga eveniet perspiciatis! Voluptatum culpa facere non dicta, tempore et recusandae, amet excepturi autem rerum minus distinctio?',
};

export default function Info(props: { division: PropsDivision }) {
	// const data = props.division;
	return (
		<div className="z-10 pt-24 font-Lato w-[90%] mx-auto">
			{/* <Image
				src={segitiga}
				className="absolute bottom-0 left-0 z-0  h-auto md:min-w-[400px] w-[300px] lg:block"
				alt="bg"
			/>
			<Image
				src={buletan}
				alt="bg"
				className="absolute top-0 right-0 z-0 h-auto md:min-w-[400px] w-[300px] lg:block"
			></Image> */}
			<div className="flex rounded-2xl px-6 py-10">
				<div className="order-2 basis-1/2 flex justify-center items-center">
					<Image
						src={data.image}
						width={1920}
						height={1080}
						alt="foto divisi"
						className='w-[80%]'
					/>
				</div>
				<div className="order-1 flex basis-1/2 flex-col gap-y-4">
					<Image
						src={data.logo}
						width={500}
						height={500}
						alt="logo"
						className="mx-auto w-[20%]"
					/>
					<h1 className="text-center text-3xl font-semibold">{data.title}</h1>
					<p>{data.description}</p>
				</div>
			</div>
		</div>
	);
}

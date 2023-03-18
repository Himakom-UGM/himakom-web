import Image from 'next/image';
import Bottom_H from './decoration/bottom';

type PropsDivision = {
	title: string;
	description: string;
	image: string;
	logo: string;
};

const data = {
	title: 'Kewirausahaan',
	logo: '/Logos_kewirus.png',
	image: '/Hero.png',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam incidunt cumque, delectus nostrum nulla aliquid nobis ad itaque suscipit illum harum totam veritatis dolorum ex repellat voluptas magnam et dolorem ipsa vitae quo fuga eveniet perspiciatis! Voluptatum culpa facere non dicta, tempore et recusandae, amet excepturi autem rerum minus distinctio?',
};

export default function Info(props: { division: PropsDivision }) {
	// const data = props.division;
	return (
		<div className="relative h-full w-full">
			<Bottom_H />
			<div className="relative mx-auto h-full w-[90%] px-10 pt-20 pb-20 font-Lato md:pt-32 md:pb-32">
				<div className="flex flex-col rounded-2xl bg-white px-6 py-10 shadow-2xl md:flex-row">
					<div className="order-2 flex basis-1/2 items-center justify-center ">
						<Image
							src={data.image}
							width={1920}
							height={1080}
							alt="foto divisi"
							className="w-[90%] pt-5 md:pt-0"
						/>
					</div>
					<div className="order-1 flex basis-1/2 flex-col gap-y-4">
						<Image
							src={data.logo}
							width={500}
							height={500}
							alt="logo"
							className="mx-auto w-[20%] md:w-[30%] "
						/>
						<h1 className="text-center text-3xl font-semibold">{data.title}</h1>
						<p className="text-justify px-4 text-lg">{data.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

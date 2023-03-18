import Image from 'next/image';
import { useState } from 'react';

export type PropsProgram = {
	title: string;
	date: string;
	description: string;
	image: string;
}[];

const data = {
	title: 'Our Progams',
	image: '/Progams.png',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam incidunt cumque, delectus nostrum nulla aliquid nobis ad itaque suscipit illum harum totam veritatis dolorum ex repellat voluptas magnam et dolorem ipsa vitae quo fuga eveniet perspiciatis! Voluptatum culpa facere non dicta, tempore et recusandae, amet excepturi autem rerum minus distinctio?',
};

export default function Program(props: { data: PropsProgram }) {
	const [program, setProgram] = useState<any>(props.data[0]);

	const data = props.data;

	function handleDivision(e: any) {
		const division = data.find((item) => item.title === e.target.innerText);
		if(division){
			setProgram(division);
		}
	}

	return (
		<div className="mx-auto w-[90%] max-w-[1920px] pt-24 pb-20 font-Lato customMd:w-[65%]">
			<h1 className="mb-6 text-center text-3xl font-semibold xl:text-4xl">
				Our Programs
			</h1>
			<div className="flex max-h-[60vh] gap-x-6">
				<div className="flex max-w-[500px] basis-2/5 flex-col gap-y-3 overflow-scroll text-lg font-semibold">
					{data.map((program) => (
						<div
							onClick={(e) => handleDivision(e)}
							className="rounded-md bg-[#32327B] px-4 py-[6px] text-white"
							key={Math.random() * 10000}
						>
							{program.title}
						</div>
					))}
				</div>
				<div className="basis-3/5 flex-row">
					{program && (
						<div className="flex flex-col overflow-hidden rounded-lg">
							<div className="relative flex h-[300px] flex-col">
								<Image
									src={program.image}
									width={580}
									height={580}
									alt="gambar program"
									className="w-full"
								/>
								<div className="absolute bottom-2 left-6 text-white">
									<h1 className="text-2xl font-semibold">{program.title}</h1>
									<p className="text-lg">{program.date}</p>
								</div>
							</div>
							<p className="z-10 bg-[#32327B] px-6 py-5 text-justify text-lg text-white">
								{program.description}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

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
	const [program, setProgram] = useState<{
		title: string;
		date: string;
		description: string;
		image: string;
	}>(props.data[0]);

	const data = props.data;

	function handleDivision(e: any) {
		const division = data.find((item) => item.title === e.target.innerText);
		setProgram(division);
	}

	return (
		<div className="mx-auto w-[60%] pt-24 pb-20 font-Lato">
			<h1 className="mb-6 text-center text-2xl font-semibold">Our Programs</h1>
			<div className="flex gap-x-2">
				<div className="flex h-fit basis-2/5 flex-col overflow-auto">
					{data.map((program) => (
						<div
							onClick={(e) => handleDivision(e)}
							className="m-2 rounded-md bg-[#32327B] px-2 py-1 text-white "
							key={Math.random() * 10000}
						>
							{program.title}
						</div>
					))}
				</div>
				<div className=" basis-3/5 flex-row">
					{program && (
						<div className="bg-[#32327B] rounded-lg overflow-hidden">
							<div className="relative flex flex-col">
								<Image
									src={program.image}
									width={300}
									height={300}
									alt="gambar program"
									className="w-full"
								/>
								<div className="absolute bottom-0">
									<h1 className="text-bold text-center">{program.title}</h1>
									<p className="text-center">{program.date}</p>
								</div>
							</div>
							<p className="text-center">{program.description}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

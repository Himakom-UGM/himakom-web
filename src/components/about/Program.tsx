import Image from 'next/image';
import { MouseEvent, SetStateAction, useState } from 'react';
import Bottom_P from './decoration/bottom2';

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
		setProgram(division);
	}

	return (
		<div className="relative h-full w-full overflow-hidden">
			<Bottom_P />
			<div className="relative h-screen mx-auto pt-20 pb-12/ font-Lato md:pt-28">
				<h1 className="mb-8 text-center text-4xl font-semibold">
					Our Programs
				</h1>
				<div className="flex flex-col gap-x-2 px-10 xl:px-40 md:flex-row">
					<div id='programs' className="flex gap-y-3 h-[400px] basis-2/5 2xl:basis-[30%] ml-5 mb-8 gap-x-2 overflow-auto md:flex-col md:pr-2">
						{data.map((program) => (
							<div
								onClick={(e) => handleDivision(e)}
								className="text-md min-w-fit rounded-md bg-[#32327B] px-2 py-1 text-white "
								key={Math.random() * 10000}
							>
								{program.title}
							</div>
						))}
					</div>
					<div className="h-full basis-4/5 flex-row md:pl-5 px-10">
						{program && (
							<div className="h-[400px] overflow-hidden rounded-lg bg-[#32327B]">
								<div className="relative flex flex-col ">
									<Image
										src={program.image}
										width={400}
										height={400}
										alt="gambar program"
										className="w-full max-h-[200px]"
									/>
									<div className="absolute bottom-0 ml-5 text-white">
										<h1 className="text-bold  text-left">{program.title}</h1>
										<p className="text-left">{program.date}</p>
									</div>
								</div>
								<div className="flex h-[10em] flex-col justify-between">
									<p className="mx-5 h-[8em] overflow-hidden text-ellipsis py-1 text-justify text-white">
										{program.description}
									</p>
									<a className="mx-5 text-[#F3DB00]">Read more...</a>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

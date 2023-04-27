import Image from 'next/image';
import styles from './style.module.css';
import { useState } from 'react';

type ProgramType = {
	id: string;
	title: string;
	date: string;
	description: string;
	image: string;
};

const program = [
	{
		id: '1',
		title: 'Program 1',
		date: '01 Januari 2023',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. sit amet consectetur adipisicing elit. Quisquam, quae.',
		image: 'https://picsum.photos/1920/1080',
	},
];

type ProgramProps = {
	idKey: string;
};

export default function Program({ idKey }: ProgramProps) {
	const [selectedProgram, setSelectedProgram] = useState<string>('1');

	return (
		<section className="h-screen py-20">
			<h1 className="pb-16 text-center text-4xl font-semibold lg:text-5xl">
				Our Programs
			</h1>
			<div className="mx-auto flex h-3/4 w-[70%] justify-center gap-x-6 overflow-hidden overflow-y-hidden">
				<div
					className={
						styles.scroll +
						' flex max-h-full basis-2/5 flex-col gap-y-4 overflow-y-scroll pr-3'
					}
				>
					{program.map((item) => {
						return (
							<div
								key={item.id}
								onClick={() => setSelectedProgram(item.id)}
								className="rounded-lg bg-[#32327B] px-6 py-2 text-3xl text-white"
							>
								<h1>{item.title}</h1>
							</div>
						);
					})}
				</div>
				<div className="h-full basis-3/5 overflow-hidden rounded-xl border-black">
					<div className="relative">
						<Image
							src={
								program.find((item: ProgramType) => item.id === selectedProgram)
									?.image || '/main/images/bg/not_found.png'
							}
							alt="kewirush"
							width={1920}
							height={1080}
							className="object-cover"
						/>
						<div className="absolute bottom-5 left-5">
							<h1 className="text-3xl font-semibold text-white lg:text-4xl">
								{
									program.find(
										(item: ProgramType) => item.id === selectedProgram
									)?.title
								}
							</h1>
							<p className="text-lg text-white lg:text-xl">
								{
									program.find(
										(item: ProgramType) => item.id === selectedProgram
									)?.date
								}
							</p>
						</div>
					</div>
					<div className="flex h-full flex-col items-start bg-[#32327B] px-4 py-5 text-white">
						<p className="text-lg lg:text-xl xl:text-2xl">
							{
								program.find((item: ProgramType) => item.id === selectedProgram)
									?.description
							}
						</p>
						<button className="mt-4 cursor-pointer text-xl font-semibold text-[#F3DB00]">
							Read more...
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

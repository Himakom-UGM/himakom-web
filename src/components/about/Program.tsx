import Image from "next/image";
import { useState } from "react";

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
	const data = props.data;

	return (
		<div className="mx-auto w-[60%] pt-24 font-Lato pb-20">
			<h1 className="text-bold text-center">Our Programs</h1>
			<div className="flex">
				<div className="flex basis-2/5 flex-col">
					{data.map((program) => (
						<div className=" bg-slate-400 rounded m-2 " key={Math.random() * 10000}>program.title</div>
					))}
				</div>
				<div className=" basis-3/5 flex-row">
					{
						data.filter()
					}
					
				</div>
			</div>
		</div>
	);
}

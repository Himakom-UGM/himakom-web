import React from 'react';
import { motion } from 'framer-motion';
import Search from '@/components/news/Search';
import Section from '@/components/news/Section';
import TableOfContent from '@/components/news/TableOfContent';

type NewsType = { title: string; content: string[] }[][];

const allNews = [
	[
		{
			title: 'What is Lorem Ipsum?',
			content: [
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			],
		},
		{
			title: 'Where does it come from?',
			content: [
				'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
				'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
			],
		},
	],
	[
		{
			title: 'Why do we use it?',
			content: [
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
				'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
			],
		},
	],
];

const NewsPage = () => {
	return (
		<div className="relative mx-auto flex max-w-7xl flex-col gap-x-4 px-8 pt-20 customMd:flex-row">
			<section className="basis-1/4">
				<Search />
				<TableOfContent titles={allNewsToTitles(allNews)} />
			</section>
			<motion.article
				initial={{
					opacity: 0,
					y: 50,
				}}
				animate={{ opacity: 1, y: 0 }}
				className="mb-12 flex basis-3/4 flex-col gap-y-2"
			>
				<h1 className="text-3xl font-semibold customMd:max-w-[70%] 2xl:text-4xl">
					Lorem ipsum dolor sit amet consectetur adipiscing elit
				</h1>
				<p className="w-fit rounded-3xl border border-black px-5 py-1">
					Divisi
				</p>
				<p>Posted on 02/05/20 by Ramzy Izza</p>
				<div className="first-letter mt-3 mb-6 flex h-[400px] w-full items-center justify-center bg-formColor-100 text-3xl text-slate-600">
					Image Here
				</div>
				<Section content={allNews[0]} />

				<div className="my-6">
					<div className="flex h-[400px] w-full items-center justify-center bg-formColor-100 text-3xl text-slate-600">
						Image Here
					</div>
					<p className="text-slate-700">Description of Image (if any)</p>
				</div>
				<Section content={allNews[1]} />
			</motion.article>
		</div>
	);
};

function allNewsToTitles(allNews: NewsType): string[] {
	const titles: string[] = [];
	allNews.forEach((section) => {
		section.forEach((item) => {
			titles.push(item.title);
		});
	});
	return titles;
}

export default NewsPage;

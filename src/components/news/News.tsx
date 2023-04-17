/* eslint-disable react/jsx-key */
import React from 'react';
import Image from 'next/image';
import Card from './Card';

const News = (props: { data: any }) => {
	console.log(props.data[0].image);

	return (
		<div className="relative mx-auto w-full max-w-[1920px] overflow-x-hidden bg-[#f8f8f8] pb-36">
			<Image
				src="/images/bg/news.png"
				alt="decoration"
				width={1438}
				height={291}
				className="absolute top-0 z-0 w-full"
			/>
			<div className="relative flex flex-col items-center justify-center py-12 text-[#252525]">
				<h1 className="font-lato text-4xl font-semibold xl:text-5xl">
					Latest News
				</h1>
				<p className="py-4 px-6 text-center md:text-xl customMd:max-w-[60%]">
					Berikut adalah informasi terbaru terkait kegiatan, acara, dan berita
					terkini yang diselenggarakan oleh HIMAKOM.
				</p>
				<div className="flex basis-1/2 cursor-pointer flex-col justify-center gap-x-6 gap-y-3 py-6 px-10 lg:flex-row">
					<Card
						title={props.data[0].title}
						description={props.data[0].headerText}
						primary
						topic={props.data[0].topic}
						date={props.data[0].updatedDate}
						author={props.data[0].author}
						key={10}
						image={'https:' + props.data[0].image}
					/>
					<div className="flex basis-1/2 flex-col gap-y-4">
						<Card
							title={props.data[1].title}
							description={props.data[1].headerText}
							primary={false}
							topic={props.data[1].topic}
							date={props.data[1].updatedDate}
							author={props.data[1].author}
							key={12}
							image={'https:' + props.data[1].image}
						/>
						<Card
							title={props.data[2].title}
							description={props.data[2].headerText}
							primary={false}
							topic={props.data[2].topic}
							date={props.data[2].updatedDate}
							author={props.data[2].author}
							key={13}
							image={'https:' + props.data[2].image}
						/>
					</div>
				</div>

				<button className="mt-6 rounded-md bg-primary-300 px-4 py-2 text-white ">
					Load more
				</button>
			</div>
		</div>
	);
};

export default News;

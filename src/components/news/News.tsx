/* eslint-disable react/jsx-key */
import React from 'react';
import Image from 'next/image';
import Card from './Card';
import MoreNews from './MoreNews';

const News = (props: { data: any }) => {
	return (
		<div className="relative mx-auto w-full max-w-[1920px] overflow-x-hidden bg-[#f8f8f8] pb-12">
			<Image
				src="/main/images/bg/news.png"
				alt="decoration"
				width={1438}
				height={291}
				className="absolute top-0 z-0 w-full"
			/>
			<div className="relative flex flex-col items-center justify-center py-12 text-[#252525]">
				<h1 className="font-lato text-3xl font-semibold xl:text-[52px]">
					Latest News
				</h1>
				<p className="mt-1 mb-2 py-4 px-6 text-center md:text-lg md:max-w-[80%] customMd:max-w-[60%] xl:text-[20px] xl:max-w-3xl">
					Berikut adalah informasi terbaru terkait kegiatan, acara, dan berita
					terkini 
					yang diselenggarakan oleh HIMAKOM.
				</p>
				<div className="grid w-full xl:max-w-[82vw] lg:max-w-[90vw] basis-1/2 flex-col justify-center gap-x-4 xl:gap-x-12 gap-y-3 py-2 px-6 customMd:w-full customMd:grid-cols-2 lg:flex-row lg:gap-x-6 xl:px-20">
					<Card
						title={props.data[0].title}
						description={props.data[0].headerText}
						primary
						topic={props.data[0].topic}
						createdDate={props.data[0].createdDate}
						updateDate={props.data[0].updatedDate}
						author={props.data[0].author}
						key={10}
						image={'https:' + props.data[0].image}
						slug={props.data[0].slug}
					/>
					<div className="flex basis-1/2 flex-col gap-y-4">
						<Card
							title={props.data[1].title}
							description={props.data[1].headerText}
							primary={false}
							topic={props.data[1].topic}
							createdDate={props.data[0].createdDate}
							updateDate={props.data[0].updatedDate}
							author={props.data[1].author}
							key={12}
							image={'https:' + props.data[1].image}
							slug={props.data[1].slug}
						/>
						<Card
							title={props.data[2].title}
							description={props.data[2].headerText}
							primary={false}
							topic={props.data[2].topic}
							createdDate={props.data[0].createdDate}
							updateDate={props.data[0].updatedDate}
							author={props.data[2].author}
							key={13}
							image={'https:' + props.data[2].image}
							slug={props.data[2].slug}
						/>
					</div>
				</div>
				<MoreNews />
			</div>
		</div>
	);
};

export default News;

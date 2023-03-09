/* eslint-disable react/jsx-key */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import data from './data.json';
import Card from './Card';

const News = () => {
	return (
		<>
			<div className="relative mx-auto w-full max-w-7xl overflow-x-hidden bg-[#f8f8f8] pb-36">
				<Image
					src="/images/bg/news.png"
					alt="decoration"
					width={1438}
					height={291}
					className="absolute top-0 left-0 z-0"
				/>
				<div className="relative flex flex-col items-center justify-center py-12 text-[#252525]">
					<h1 className="font-lato text-4xl font-semibold xl:text-5xl">
						Latest News
					</h1>
					<p className="py-4 px-6 text-center md:text-xl customMd:max-w-[60%]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className="flex basis-1/2 cursor-pointer flex-col justify-center gap-x-6 gap-y-3 py-6 px-10 lg:flex-row">
						<Card
							title="Lorem ipsum dolor sit amet, consectetur"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
							primary
							topic="Topic"
							date="12/12/2022"
							author="Ramzy Izza"
							key={10}
							image="/images/content/ldk.png"
						/>
						<div className="flex basis-1/2 flex-col gap-y-4">
							<Card
								title="Lorem ipsum dolor sit amet, consectetur"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
								primary={false}
								topic="Topic"
								date="10/01/2023"
								author="Gelora Manalu"
								key={12}
								image="/images/content/pemira.png"
							/>
							<Card
								title="Lorem ipsum dolor sit amet, consectetur"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
								primary={false}
								topic="Topic"
								date="12/12/2021"
								author="Josiah Farrel"
								key={13}
								image="/images/content/sh.png"
							/>
						</div>
					</div>

					<button className="mt-6 rounded-md bg-primary-300 px-4 py-2 text-white ">
						Load more
					</button>
				</div>
			</div>
		</>
	);
};

export default News;

/* eslint-disable react/jsx-key */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import data from './data.json';

const News = () => {
	return (
		<>
			<div className="relative mx-auto w-full max-w-7xl overflow-x-hidden bg-[#f8f8f8]">
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
					<p className="max-w-[60%] py-4 px-6 text-center md:text-xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className="flex flex-col justify-center p-6 lg:flex-row">
						<div className="relative flex w-full basis-1/2 flex-col overflow-y-hidden rounded-xl">
							<Image
								src="/images/content/ldk.png"
								alt="image"
								width={1200}
								height={600}
								className="absolute -mt-12"
							/>
							<div className="relative flex min-h-full flex-col rounded-xl bg-content-overlay px-8 duration-700 hover:bg-content">
								<div className="relative flex flex-col gap-y-3 pt-52 font-lato text-[#F8F8F8]">
									<h1 className="text-3xl font-semibold 2xl:text-4xl">
										Lorem ipsum dolor sit amet, consectetur
									</h1>
									<p className="font-regular mt-1 max-w-[90%] text-sm">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut
									</p>
									<div className="flex items-center gap-x-4 pt-2 pb-6 text-sm">
										<div className="rounded-xl border border-white px-5 py-[2px] text-white">
											Topic
										</div>
										<div className="text-white ">
											Posted on 02/05/20 by Ramzy Izza
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<button className="rounded-md bg-primary-300 px-2 py-4 text-white ">
						Load more
					</button>
				</div>
			</div>
		</>
	);
};

export default News;

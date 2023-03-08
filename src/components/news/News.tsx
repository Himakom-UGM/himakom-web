/* eslint-disable react/jsx-key */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import data from './data.json';
import image from '../../../public/foto.png';

const News = () => {
	return (
		<>
			<div className="relative w-full overflow-x-hidden">
				<div className="relative flex flex-col items-center justify-center py-12">
					<h1 className="font-lato text-4xl font-semibold text-black sm:text-5xl">
						Latest News
					</h1>
					<p className="py-4 px-6 text-center font-thin md:text-xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className="p-6 relative flex flex-col justify-center lg:flex-row">
						<div className="relative flex w-full flex-col">
							{data.newest.map((item) => {
								return (
									<div className="relative my-3 flex h-[500px] flex-col rounded-2xl bg-primary-100 sm:mx-6 sm:h-[70vh] md:h-[85vh] lg:h-[80vh] lg:my-0 ">
										<Image
											src={require('../../../public/' + item.image + '.png')}
											alt="image"
											className="w-full"
										/>
										<div className="relative flex flex-col gap-y-3 font-lato">
											<h1 className="px-6 text-[20px] font-semibold text-[#F8F8F8]">
												{item.judul}
											</h1>
											<h1 className="font-regular px-6 text-[12px] text-[#F8F8F8]">
												{item.isi}
											</h1>
											<h1 className="mx-6 w-1/4 rounded-full border-2 border-white text-center text-white">
												Topic
											</h1>
											<h1 className="px-6 pb-6 text-white ">
												Posted on {item.posted} by {item.by}
											</h1>
										</div>
									</div>
								);
							})}
						</div>
						<div className="relative flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-1 lg:h-[80vh] overflow-y-scroll">
							{data.latest.map((item) => {
								return (
									<div className="relative my-3 flex h-[450px] flex-col rounded-2xl bg-primary-300 sm:mx-12 sm:h-[50vh] lg:mx-6 lg:mt-0">
										<Image
											src={require('../../../public/' + item.image + '.png')}
											alt="image"
											className="w-full"
										/>
										<div className="relative flex flex-col gap-y-3 font-lato">
											<h1 className="px-6 text-[20px] font-semibold text-[#F8F8F8]">
												{item.judul}
											</h1>
											<h1 className="font-regular hidden px-6 text-[12px] text-[#F8F8F8]">
												{item.isi}
											</h1>
											<h1 className="mx-6 w-1/4 rounded-full border-2 border-white text-center text-white">
												Topic
											</h1>
											<h1 className="px-6 pb-6 text-white ">
												Posted on {item.posted} by {item.by}
											</h1>
										</div>
									</div>
								);
							})}
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

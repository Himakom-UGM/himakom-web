import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Skeleton } from 'three';
import DivisionSkeleton from './Skeleton';

const Hero = ({ data }: { data: any }) => {
	// get data with graphql

	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node: any, children: any) => (
				<p className="max-w-xl text-justify customMd:max-w-none lg:text-lg xl:px-12 xl:text-xl">
					{children}
				</p>
			),
			[BLOCKS.HEADING_1]: (node: any, children: any) => (
				<h1 className="mb-4 text-xl font-bold">{children}</h1>
			),
		},
	};

	return (
		<div className="pt-36 pb-24">
			<div className="relative mx-auto flex flex-col items-center gap-y-6 rounded-xl border bg-[#f8f8f8] py-12 px-12 shadow-2xl md:w-[92%] customMd:max-w-[90%] customMd:flex-row xl:max-w-[1440px] xl:py-16">
				{data ? (
					<>
						<div className="relative flex basis-[45%] flex-col items-center gap-y-4">
							<Image
								src="/main/logo_kwrs.png"
								alt="kewirush"
								width={1920}
								height={1080}
								className="w-44 rounded-xl xl:w-56"
							/>
							<h1 className="text-2xl font-semibold lg:text-3xl xl:text-4xl">
								{data.fields.title}
							</h1>
							{documentToReactComponents(data.fields.description, options)}
						</div>
						<div className="flex basis-[55%] place-content-center">
							<Image
								src={'https:' + data.fields.image.fields.file.url}
								alt="kewirush"
								width={1920}
								height={1080}
								className="w-[80%] rounded-xl"
							/>
						</div>
					</>
				) : (
					<DivisionSkeleton />
				)}
			</div>
		</div>
	);
};

export default Hero;

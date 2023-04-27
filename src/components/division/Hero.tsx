import Image from 'next/image';
import { client } from '@/utils/graphql';
import { gql } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

type HeroProps = {
	idKey: string;
};

const initialData = {
	title: '',
	description: {
		json: '',
	},
	image: {
		url: '',
	},
	logo: {
		url: '',
	},
};

const Hero = ({ idKey }: HeroProps) => {
	// get data with graphql
	const [data, setData] = useState<any>(initialData);
	const getData = useCallback(async () => {
		const data = await client.query({
			query: gql`
				query divisiEntryQuery {
					divisi(id: "${idKey}") {
						sys {
							id
						}
						title
						description {
							json
						}
						image {
							url
						}
						logo {
							url
						}
						# add the fields you want to query
					}
				}
			`,
		});
		return data;
	}, [idKey]);

	useEffect(() => {
		getData().then((data) => {
			setData(data.data.divisi);
			console.log(data.data.divisi);
		});
	}, [getData]);

	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node: any, children: any) => (
				<p className="max-w-xl text-justify customMd:max-w-none lg:text-lg xl:text-xl xl:px-12">
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
			<div className="relative mx-auto flex flex-col items-center gap-y-6 rounded-xl border bg-[#f8f8f8] py-12 xl:py-16 px-12 shadow-2xl md:w-[92%] customMd:max-w-[90%] customMd:flex-row xl:max-w-[1440px]">
				<div className="relative flex basis-[45%] flex-col items-center gap-y-4">
					<Image
						src="/main/logo_kwrs.png"
						alt="kewirush"
						width={1920}
						height={1080}
						className="w-44 rounded-xl xl:w-56"
					/>
					<h1 className="text-2xl lg:text-3xl font-semibold xl:text-4xl">{data.title}</h1>
					{documentToReactComponents(data.description.json, options)}
				</div>
				<div className="flex basis-[55%] place-content-center">
					<Image
						src="/main/images/bg/content_imgdetailpost.png"
						alt="kewirush"
						width={1920}
						height={1080}
						className="w-[80%] rounded-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;

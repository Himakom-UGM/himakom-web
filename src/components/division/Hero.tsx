import Image from 'next/image';
import { client } from '@/utils/graphql';
import { gql } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';

type HeroProps = {
	idKey: string;
};

const Hero = ({ idKey }: HeroProps) => {
	// get data with graphql
	const [data, setData] = useState<any>();
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

	return (
		<div className="pt-36 pb-24">
			<div className="relative mx-auto flex flex-col items-center gap-y-6 rounded-xl border bg-[#f8f8f8] py-16 px-12 shadow-2xl md:w-[92%] customMd:max-w-[90%] customMd:flex-row xl:max-w-[1440px]">
				<div className="relative flex basis-[40%] flex-col items-center gap-y-4">
					<Image
						src="/main/logo_kwrs.png"
						alt="kewirush"
						width={1920}
						height={1080}
						className="w-44 rounded-xl xl:w-56"
					/>
					<h1 className="text-4xl font-semibold xl:text-5xl">Keiqu</h1>
					<p className="max-w-xl text-justify text-lg customMd:max-w-none lg:text-2xl xl:px-12">
						Kewirausahaan merupakan sebuah divisi dalam HIMAKOM yang membina
						mahasiswa dalam upaya menanamkan jiwa kewirausahaan dan manajemen
						finansial, serta mengembangkan kreativitas mahasiswa.
					</p>
				</div>
				<div className="flex basis-3/5 place-content-center">
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

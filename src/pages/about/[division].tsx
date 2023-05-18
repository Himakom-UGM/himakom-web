import {
	contentfulClient,
	contentfulClientCS,
} from '@/utils/contentful/contentfulClient';
import Hero from '@/components/division/Hero';
import Members from '@/components/division/Members';
import Program from '@/components/division/Program';
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Entry, EntryCollection } from 'contentful';

export async function getStaticPaths() {
	const data = await contentfulClientCS.getEntries<any>({
		content_type: 'divisi',
	});

	const paths = data.items.map((item: any) => {
		return {
			params: {
				division: item.fields.slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context: any) {
	const data = await contentfulClientCS.getEntries<any>({
		content_type: 'divisi',
		'fields.slug[in]': context.params.division,
	});

	return {
		props: {
			data: data,
		},
	};
}

export default function Division({ data }: { data: EntryCollection<any> }) {
	const router = useRouter();

	// CLIENT SIDE RENDERING <3
	// const fetchDivision = async () => {
	// 	const data = contentfulClientCS.getEntries<any>({
	// 		content_type: 'divisi',
	// 		'fields.slug[in]': router.query.division,
	// 	});

	// 	return data;
	// };

	// const { data, isLoading, error } = useQuery(['division', router.query.division], fetchDivision, {
	// 	enabled: !!router.query.division,
	// });

	// useEffect(() => {
	// 	console.log(data);
	// 	if (data && !data.items.length) {
	// 		router.push('/404');
	// 		return;
	// 	}
	// }, [data, router]);

	// if (error) {
	// 	router.back()
	// }

	return (
		<>
			<Head>
				<title>Divisi</title>
			</Head>
			<main className="">
				<Image
					src="/main/images/bg/division.png"
					alt="background"
					fill
					className="-z-10 object-cover"
				/>
				<Hero data={data?.items[0]} />
				<Members data={data?.items[0].fields.members} />
				{/* <Program idKey={props.id} /> */}
			</main>
		</>
	);
}

// get static paths

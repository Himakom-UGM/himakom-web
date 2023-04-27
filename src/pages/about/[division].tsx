import { contentfulClient } from '@/utils/contentful/contentfulClient';
import Hero from '@/components/division/Hero';
import Members from '@/components/division/Members';
import Program from '@/components/division/Program';
import Head from 'next/head';
import Image from 'next/image';

export default function Division(props: any) {
	return (
		<>
			<Head>
				<title>{props.title}</title>
			</Head>
			<main className="">
				<Image
					src="/main/images/bg/division.png"
					alt="background"
					fill
					className="-z-10 object-cover"
				/>
				<Hero idKey={props.id}/>
				<Members idKey={props.id}/>
				<Program idKey={props.id}/>
			</main>
		</>
	);
}

// get static paths
export async function getStaticPaths() {
	const divisions = await contentfulClient.getEntries({
		content_type: 'divisi',
	});

	const paths = divisions.items.map((division: any) => ({
		params: { division: division.fields.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

// get static props
export async function getStaticProps(context: any) {
	const divisions = await contentfulClient.getEntries({
		content_type: 'divisi',
	});

	const rawData: any = divisions.items.find(
		(division: any) => division.fields.slug === context.params.division
	);

	return {
		props: {
			id: rawData.sys.id,
			title: rawData.fields.title,
		},
	};
}

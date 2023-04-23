import { getDivisions } from '@/utilites/getDivisions';

import Head from 'next/head';
import Info from '@/components/about/Info';
import Carousel from '@/components/common/Carousel';
import Program from '@/components/about/Program';
import {
	contentfulClient,
	contentfulClientCS,
} from '@/utils/contentful/contentfulClient';

export type PropsDivision = {
	info: {
		title: string;
		description: string;
		image: string;
		logo: string;
	};
	members: {
		name: string;
		role: string;
		photo: string;
		batch: number;
	}[];
	programs: {
		title: string;
		date: string;
		description: string;
		image: string;
	}[];
};

const divisionDummy = {
	info: {
		title: 'Division',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
		image: 'https://picsum.photos/1920/1080',
		logo: 'https://picsum.photos/500/500',
	},
	members: [
		{
			name: 'Member 1',
			role: 'Role 1',
			photo: 'https://picsum.photos/500/500',
			batch: 2020,
		},
		{
			name: 'Member 2',
			role: 'Role 2',
			photo: 'https://picsum.photos/500/500',
			batch: 2020,
		},
		{
			name: 'Member 3',
			role: 'Role 3',
			photo: 'https://picsum.photos/500/500',
			batch: 2020,
		},
	],
	programs: [
		{
			title: 'Program 1',
			date: '2021-01-01',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
			image: 'https://picsum.photos/1920/1080',
		},
		{
			title: 'Program 2',
			date: '2021-01-01',
			description:
				'Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
			image: 'https://picsum.photos/1920/1080',
		},
		{
			title: 'Program 3',
			date: '2021-01-01',
			description:
				'Dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
			image: 'https://picsum.photos/1920/1080',
		},
		{
			title: 'Program 4',
			date: '2021-01-01',
			description:
				'Dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
			image: 'https://picsum.photos/1920/1080',
		},
		{
			title: 'Program 5',
			date: '2021-01-01',
			description:
				'Dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
			image: 'https://picsum.photos/1920/1080',
		},
		{
			title: 'Program 6',
			date: '2021-01-01',
			description:
				'Dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
			image: 'https://picsum.photos/1920/1080',
		},
		{
			title: 'Program 7',
			date: '2021-01-01',
			description:
				'Dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
			image: 'https://picsum.photos/1920/1080',
		},
		{
			title: 'Program 8',
			date: '2021-01-01',
			description:
				'Dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
			image: 'https://picsum.photos/1920/1080',
		},
	],
};

export default function Division(props: PropsDivision) {
	return (
		<>
			{/* <Head>
				<title>Division</title>
			</Head>
			<main>
				<Info division={props.info} />
				<Carousel data={props.members} />
				<Program data={props.programs} />
			</main> */}
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

	const data = {
		createdAt: rawData.sys.createdAt,
		updatedAt: rawData.sys.updatedAt,
		title: rawData.fields.title,
		description: rawData.fields.description,
		image: rawData.fields.image?.fields.file.url,
		logo: rawData.fields.logo?.fields.file.url,
		members: rawData.fields.member,
		programs: rawData.fields.program,
	};

	console.log(data);

	return {
		props: {},
	};
}

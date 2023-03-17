import { getDivisions } from '@/utilites/getDivisions';

import Head from 'next/head';
import Info from '@/components/about/Info';
import Carousel from '@/components/common/Carousel';
import Program from '@/components/about/Program';

type PropsDivision = {
	info: { title: string; description: string; image: string; logo: string };
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

export default function Division(props: PropsDivision) {
	return (
		<>
			<Head>
				<title>Division</title>
			</Head>
			<main>
				<Info division={props.info} />
				<Carousel data={props.members} />
				<Program data={props.programs} />
			</main>
		</>
	);
}

// get static paths
export async function getStaticPaths() {
	const divisions = await getDivisions();
	const paths = divisions.map((division: any) => ({
		params: { division: division.slug },
	}));
	return {
		paths,
		fallback: false,
	};
}

// get static props
export async function getStaticProps(context: any) {
	const divisions = await getDivisions();
	const division = divisions.find(
		(division: any) => division.slug === context.params.division
	);

	

	return {
		props: {
			division,
		},
	};
}

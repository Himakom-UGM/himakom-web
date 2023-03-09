import { getDivisions } from '@/utilites/getDivisions';

export default function Division(props: { division: any }) {
	// get division from props
	const { division } = props;
	return (
		<div>
			<h1>{division.name}</h1>
		</div>
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

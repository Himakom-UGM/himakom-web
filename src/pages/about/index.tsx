import AboutPage from '@/components/about';
import Head from 'next/head';

export default function About() {
	return (
		<>
			<Head>
				<title>About Us</title>
			</Head>
			<main>
				<AboutPage />
			</main>
		</>
	);
}

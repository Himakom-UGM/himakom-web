import CabinetPage from '@/components/cabinet';
import Head from 'next/head';

export default function Cabinet() {
	return (
		<>
			<Head>
				<title>Cabinet</title>
			</Head>

			<main>
				<CabinetPage />
			</main>
		</>
	);
}

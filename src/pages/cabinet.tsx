import CabinetPage from '@/components/cabinet';
import Head from 'next/head';
import Example from '@/components/cabinet/Example';

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

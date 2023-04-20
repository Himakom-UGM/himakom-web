import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/common/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<link rel="shortcut icon" href="/main/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

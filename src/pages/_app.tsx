import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/common/Layout';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Head>
					<link rel="shortcut icon" href="/main/favicon.ico" />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</QueryClientProvider>
	);
}

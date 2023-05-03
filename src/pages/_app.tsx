import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/common/Layout';
import Head from 'next/head';
import { useEffect } from 'react';


import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
		  easing: "ease-out-cubic",
		  once: true,
		  offset: 50,
		});
	  }, []);
	return (
		<Layout>
			<Head>
				<link rel="shortcut icon" href="/main/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

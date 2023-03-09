import Head from 'next/head';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import Example from '@/components/homepage/Example';
import News from '@/components/news/News';
import Banner from '@/components/homepage/Banner';
import About from '@/components/homepage/About';

export default function Home() {
	return (
		<>
			<Head>
				<title>Himakom UGM</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Himakom adalah organisasi himpunan mahasiswa Ilmu Komputer Universitas Gadjah Mada."
				/>
				<meta name="keywords" content="Himakom UGM, Ilmu Komputer, Omah TI" />
        <link rel="icon" href="himakom.ico" />
			</Head>
			<main>
				<Banner />
				<About />
				<News />
			</main>
		</>
	);
}

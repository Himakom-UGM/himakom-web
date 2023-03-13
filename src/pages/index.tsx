import Head from 'next/head';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import Example from '@/components/homepage/Example';
import News from '@/components/news/News';
import Banner from '@/components/homepage/Banner';
import About from '@/components/homepage/About';
import { contentfulClientCS } from '@/utils/contentful/contentfulClient';
import { EntryCollection } from 'contentful';
import { NewsType } from '@/utils/contentful/contentfulTypes';
import { useEffect, useState } from 'react';

export async function getServerSideProps() {
	const data = await contentfulClientCS.getEntries<NewsType>({
		content_type: 'news',
		});

	return {
		props: { data },
	};

}


export default function Home({data}: {data: EntryCollection<NewsType>}) {
	
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
				<News data={data} />
			</main>
		</>
	);
}

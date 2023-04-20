import Head from 'next/head';
import News from '@/components/news/News';
import Banner from '@/components/homepage/Banner';
import About from '@/components/homepage/About';
import { contentfulClientCS } from '@/utils/contentful/contentfulClient';
import { useEffect, useState } from 'react';
import { getNewsPreview } from '@/utilites/getNews';
import Decorative from '@/components/homepage/decoration/Decorative';
import Image from 'next/image';

export default function Home() {
	const [data, setData] = useState<any>();

	useEffect(() => {
		async function fetchContent() {
			const response = await contentfulClientCS.getEntries<any>({
				content_type: 'news',
			});

			const extractedData = response.items.map((item) => {
				return getNewsPreview(item);
			});

			setData(extractedData);
		}

		fetchContent();
	}, []);

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
			</Head>
			<main className="">
				<Banner />
				<About />
				{data && <News data={data} />}
				<section className="relative w-full">
					<Image
						alt="background"
						fill
						src="/main/images/bg/536.png"
						className="object-cover"
					/>
					<Decorative />
				</section>
			</main>
		</>
	);
}

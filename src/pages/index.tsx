import Head from 'next/head';
import News from '@/components/news/News';
import Banner from '@/components/homepage/Banner';
import About from '@/components/homepage/About';
import { contentfulClientCS } from '@/utils/contentful/contentfulClient';
import { useEffect, useState } from 'react';

export default function Home() {
	const [data, setData] = useState<any>();

	useEffect(() => {
		async function fetchContent() {
			const response = await contentfulClientCS.getEntries<any>({
				content_type: 'news',
			});

			const extractedData = response.items.map((item) => {
				const createdDate = new Date(item.sys.createdAt).toLocaleDateString(
					'id-ID',
					{
						year: 'numeric',
						month: 'numeric',
						day: 'numeric',
					}
				);
				const updatedDate = new Date(item.sys.updatedAt).toLocaleDateString(
					'id-ID',
					{
						year: 'numeric',
						month: 'numeric',
						day: 'numeric',
					}
				);
				const title = item.fields.title;
				const image = item.fields.image[0].fields.file.url;
				const detail = item?.fields.detailnews;
				const author = item?.fields.author;
				const headerText = item?.fields.headerText;
				const topic = item?.fields?.topic;
				return {
					title,
					headerText,
					createdDate,
					updatedDate,
					image,
					detail,
					author,
					topic,
				};
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
			<main>
				<Banner />
				<About />
				{data && <News data={data} />}
			</main>
		</>
	);
}

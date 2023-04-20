import Search from '@/components/news/Search';
import Section from '@/components/news/Section';
import TableOfContent from '@/components/news/TableOfContent';
import { contentfulClientCS } from '@/utils/contentful/contentfulClient';
import { NewsType } from '@/utils/contentful/contentfulTypes';
import { EntryCollection } from 'contentful';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
	ReactPortal,
	useEffect,
	useState,
} from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export default function Slug() {
	const router = useRouter();
	const [news, setNews] = useState<EntryCollection<any>>();
  const [loading, setLoading] = useState(true);
	const fetchNews = async () => {
		const data = contentfulClientCS.getEntries<any>({
			content_type: 'news',
			'fields.slug[in]': router.query.slug,
		});
		return data;
	};

	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (
				node: any,
				children:
					| string
					| number
					| boolean
					| ReactElement<any, string | JSXElementConstructor<any>>
					| ReactFragment
					| ReactPortal
					| null
					| undefined
			) => <p className="mb-4">{children}</p>,
			[BLOCKS.HEADING_1]: (
				node: any,
				children:
					| string
					| number
					| boolean
					| ReactElement<any, string | JSXElementConstructor<any>>
					| ReactFragment
					| ReactPortal
					| null
					| undefined
			) => <h1 className="mb-4 text-3xl font-bold">{children}</h1>,
			[BLOCKS.HEADING_2]: (
				node: any,
				children:
					| string
					| number
					| boolean
					| ReactElement<any, string | JSXElementConstructor<any>>
					| ReactFragment
					| ReactPortal
					| null
					| undefined
			) => <h2 className="mb-4 text-2xl font-bold">{children}</h2>,
			[BLOCKS.HEADING_3]: (
				node: any,
				children:
					| string
					| number
					| boolean
					| ReactElement<any, string | JSXElementConstructor<any>>
					| ReactFragment
					| ReactPortal
					| null
					| undefined
			) => <h3 className="mb-4 text-xl font-bold">{children}</h3>,
			[BLOCKS.UL_LIST]: (
				node: any,
				children:
					| string
					| number
					| boolean
					| ReactElement<any, string | JSXElementConstructor<any>>
					| ReactFragment
					| ReactPortal
					| null
					| undefined
			) => <ul className="list-inside list-disc ">{children}</ul>,
			[BLOCKS.OL_LIST]: (
				node: any,
				children:
					| string
					| number
					| boolean
					| ReactElement<any, string | JSXElementConstructor<any>>
					| ReactFragment
					| ReactPortal
					| null
					| undefined
			) => <ol className="list-inside list-decimal ">{children}</ol>,
			[BLOCKS.LIST_ITEM]: (
				node: any,
				children:
					| string
					| number
					| boolean
					| ReactElement<any, string | JSXElementConstructor<any>>
					| ReactFragment
					| ReactPortal
					| null
					| undefined
			) => <li className="">{children}</li>,
      [BLOCKS.HR]: (node: any) => (
        <hr className="my-4 border-gray-300" />
      ),
			
		},
	};

	useEffect(() => {
		if (router.query.slug) {
			fetchNews().then((data) => {
				if (!data.items.length) {
					router.push('/404');
					return;
				}
				setNews(data);
        setLoading(false);
			});
		}
	}, [router.query.slug]);

	const formattedDate = (date: string) => {
		const newDate = new Date(date);
		return newDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

  if(loading) return <div className=' relative w-screen h-screen'></div>

	if (news)
		return (
			<div className="relative mx-auto flex max-w-7xl flex-col gap-x-4 px-8 pt-20 customMd:flex-row">
				<motion.article
					initial={{
						opacity: 0,
						y: 50,
					}}
					animate={{ opacity: 1, y: 0 }}
					className="mb-12 flex basis-3/4 flex-col"
				>
					<h1 className="text-3xl font-semibold customMd:max-w-[70%] 2xl:text-4xl">
						{news.items[0].fields.title}
					</h1>
					<p className="text-lg">{news.items[0].fields.headerText}</p>
					<p className=" mt-2 text-sm">
						Posted on {formattedDate(news.items[0].sys.createdAt)} by{' '}
						{news.items[0].fields.author}{' '}
					</p>
					<div className=" first-letter relative mt-3 mb-6 flex h-[400px] w-full  bg-formColor-100 text-3xl text-slate-600">
						<Image
							src={'https:' + news.items[0].fields.image[0].fields.file.url}
							alt={news.items[0].fields.image[0].fields.title}
							fill
							className=" object-contain"
						/>
					</div>
					<p>
						{documentToReactComponents(
							news.items[0].fields.detailnews,
							options
						)}
					</p>
				</motion.article>
			</div>
		);
}

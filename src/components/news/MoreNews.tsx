import { getNewsPreview } from '@/utilites/getNews';
import { contentfulClientCS } from '@/utils/contentful/contentfulClient';
import { useState } from 'react';
import Card from './Card';

export default function MoreNews() {
	const [content, setContent] = useState<any>([]);
	const [page, setPage] = useState<number>(1);
	const [isEmpty, setIsEmpty] = useState<boolean>(false);

	const loadMore = async () => {
		const res = await contentfulClientCS.getEntries({
			content_type: 'news',
			limit: 2,
			skip: page === 1 ? 3 : 3 + page * 2,
		});

		if (res.items.length <= 0) {
			setIsEmpty(true);
			return;
		} else if (res.items.length < 2) {
			setIsEmpty(true);
		}

		const data = res.items.map((item: any) => {
			return getNewsPreview(item);
		});
		setContent([...content, ...data]);
		setPage(page + 1);
	};

	return (
		<>
			<div className="grid w-full flex-col gap-x-4 gap-y-3 py-2 px-6 customMd:w-full xl:grid-cols-3 customMd:grid-cols-2 lg:flex-row lg:gap-x-6 xl:px-20">
				{content.map((item: any) => {
					return (
						<Card
							title={item.title}
							description={item.headerText}
							primary={false}
							topic={item.topic}
							createdDate={item.createdDate}
							updateDate={item.updatedDate}
							author={item.author}
							key={10}
							image={'https:' + item.image}
						/>
					);
				})}
			</div>
			{!isEmpty && (
				<button
					onClick={loadMore}
					className="mt-6 rounded-md bg-primary-300 px-4 py-2 text-white shadow-lg xl:text-[20px] "
				>
					Load more
				</button>
			)}
		</>
	);
}

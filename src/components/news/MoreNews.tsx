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
			<div className="customMd:grid w-full grid-cols-2 justify-center gap-x-6 gap-y-3 pt-2 md:pt-6 px-10 md:w-[90%]">
				{content.map((item: any) => {
					return (
						<Card
							title={item.title}
							description={item.headerText}
							primary={false}
							topic={item.topic}
							date={item.updatedDate}
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
					className="mt-6 shadow-lg rounded-md bg-primary-300 px-4 py-2 text-white "
				>
					Load more
				</button>
			)}
		</>
	);
}

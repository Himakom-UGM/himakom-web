import { contentfulClientCS } from '@/utils/contentful/contentfulClient';

export const getYear = async () => {
	const res = await contentfulClientCS.getEntries({
		content_type: 'events',
	});

	let year = res.items.map((item) => ({
		// 2023-03-17T05:28:16.820Z convert to year only
		year: item.sys.createdAt.slice(0, 4),
	}));

	// get unique year
	const uniqueYear = new Set(year.map((item) => item.year));

	return Array.from(uniqueYear);
};

export const getEvents = async () => {
	const res = (await contentfulClientCS.getEntries({
		content_type: 'events',
	})) as any;

	const extractedEvents = res.items.map((item: any) => {
		// extract description 20 words
		const description = item?.fields.details.content[0].content[0].value;
		const descriptionWords = description.split(' ');
		const description20Words = descriptionWords.slice(0, 12).join(' ');

		return {
			createAt: item.sys.createdAt,
			updateAt: item.sys.updatedAt,
			title: item?.fields.title,
			images: item?.fields.image,
			details: description20Words,
			id: item.sys.id,
			division: item.fields.divisi,
			year: item.sys.createdAt.slice(0, 4),
		};
	});

	return extractedEvents;
};

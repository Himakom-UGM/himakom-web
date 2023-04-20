export const getNewsPreview = (item: any) => {
	const createdDate = new Date(item.sys.createdAt).toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});
	const updatedDate = new Date(item.sys.updatedAt).toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});
	const title = item.fields.title;
	const image = item.fields.image[0].fields.file.url;
	const detail = item?.fields.detailnews;
	const author = item?.fields.author;
	const headerText = item?.fields.headerText;
	const topic = item?.fields?.topic;
    const id = item?.sys?.id;
	const slug = item?.fields?.slug;

	return {
		slug,
		title,
		headerText,
		createdDate,
		updatedDate,
		image,
		detail,
		author,
		topic,
        id
	};
};

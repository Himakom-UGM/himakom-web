import React from 'react';
import { createClient } from 'contentful';
import { contentfulClientCS } from '@/utils/contentful/contentfulClient';

// import DetailedPost from '@/components/detail-post/Example';

export async function getStaticPaths() {
	const client = contentfulClientCS;
	const { items } = await client.getEntries({
		content_type: 'events',
	});

	const paths = items.map((item: any) => ({
		params: {
			event: item?.fields?.title.toLowerCase().replace(/ /g, '-'),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: any) {
	const { items } = await contentfulClientCS.getEntries({
		content_type: 'events',
		'fields.title': params,
	});

	const matchingItem = items.find(
		(item: any) =>
			item.fields.title.toLowerCase() === params.event.toLowerCase()
	);

	return {
		props: {
			event: matchingItem || null,
		},
	};
}

const event = ({ event }: any) => {
	return (
		<div>
			{/* <DetailedPost
				divisi={event.fields.divisi}
				title={event.fields.title}
				date={event.sys.createdAt}
			/> */}
		</div>
	);
};

export default event;

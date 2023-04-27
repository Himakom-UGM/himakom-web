import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';

import DetailedPost from '../../components/detail-post/Example';
import { contentfulClientCS } from '@/utils/contentful/contentfulClient';

const client = createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
	accessToken: process.env.DEV
		? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN!
		: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN!,
});

export async function getStaticPaths() {
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
			item.fields.title.toLowerCase().replace(/ /g, '-') ===
			params.event.toLowerCase().replace(/ /g, '-')
	);

	return {
		props: {
			event: matchingItem || null,
			allevents: items,
		},
	};
}

const Event = ({ event, allevents }: any) => {
	const [filteredEvents, setFilteredEvents] = useState([]);

	useEffect(() => {
		if (allevents) {
			setFilteredEvents(allevents);
		}
	}, [allevents]);

	console.log(event.fields.image?.[0]?.fields.file.url)
	return (
		<div>
			<DetailedPost
				divisi={event.fields.divisi}
				title={event.fields.title}
				date={event.sys.createdAt}
				img={event.fields.image?.[0]?.fields.file.url}
				published={event.fields.publisher}
				body={event.fields.details}
				allevents={filteredEvents}
			/>
		</div>
	);
};

export default Event;

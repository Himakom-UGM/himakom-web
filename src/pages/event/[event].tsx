import React, { useState, useEffect } from 'react';

import DetailedPost from '../../components/detail-post/Example';
import { contentfulClientCS } from '@/utils/contentful/contentfulClient';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { Entry } from 'contentful';
import { error } from 'console';

async function getEvents({ event }: any) {
	const { items } = await contentfulClientCS.getEntries({
		content_type: 'events',
	});

	const matchingItem = items.find(
		(item: any) =>
			item.fields.title.toLowerCase().replace(/ /g, '-') ===
			event.toLowerCase().replace(/ /g, '-')
	);
	
	if (!matchingItem) throw new Error('No matching item')

	return {
		event: matchingItem as Entry<any>,
		allevents: items ,
	};
}

const Event = () => {
	const [filteredEvents, setFilteredEvents] = useState<any[]>([]);
	const router = useRouter()

	const {data, error} = useQuery(['events', router.query.event], () => getEvents({event: router.query.event}), {
		retry: false,
	});

	useEffect(() => {
		if (data?.allevents) {
			setFilteredEvents(data.allevents);
		}
	}, [data?.allevents]);

	useEffect(() => {
		console.log(data)
	}, [data])

	if(error) {
		router.push('/404')
	}

	if(data) return (
		<div>
			<DetailedPost
				divisi={data.event.fields.divisi}
				title={data.event.fields.title}
				date={data.event.sys.createdAt}
				img={data.event.fields.image?.[0]?.fields.file.url}
				published={data.event.fields.publisher}
				body={data.event.fields.details}
				allevents={filteredEvents}
			/>
		</div>
	);
};

export default Event;

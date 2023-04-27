import { createClient } from 'contentful';

export const contentfulClientCS = createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
	accessToken: process.env.DEV
		? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN!
		: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN!,
	host: process.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export const contentfulClient = createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
	accessToken: process.env.DEV
		? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN!
		: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN!,
	host: process.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

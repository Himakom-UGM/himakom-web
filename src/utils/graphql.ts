import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,

	cache: new InMemoryCache(),
	headers: {
		authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN}`,
	},
});

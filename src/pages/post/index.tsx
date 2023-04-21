import Head from 'next/head';
// import Blogpost from '../../components/detail-post/Example';

export default function Post() {
	const contentful = require('contentful');

	const client = contentful.createClient({
		space: 'lnrorb69ofrw',
		environment: 'master', // defaults to 'master' if not set
		accessToken: 'uEYL3D48wB8j1G1VBBdQqGKcM2mUZS-DZttIrkGKV04',
	});

	client
		.getEntry('6HEQF963qeAb0gOufqQCoT')
		.then((entry: any) => console.log(entry))
		.catch(console.error);
	return (
		<>
			<Head>
				<title>Post</title>
			</Head>
			<main>
				Post
				{/* <Blogpost /> */}
			</main>
		</>
	);
}

/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
	basePath: '/main',
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net',
				port: '',
				pathname: '/lnrorb69ofrw/**',
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				port: '',
				pathname: '/**',
			},
		],
		unoptimized: true,
	},
	trailingSlash: true,

	async redirects() {
		return [
			{
				source: '/',
				destination: '/main',
				basePath: false,
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;

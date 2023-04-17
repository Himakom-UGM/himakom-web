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
	},
	trailingSlash: true,
	 
	images : {
		unoptimized : true
	}
	
};

module.exports = nextConfig;

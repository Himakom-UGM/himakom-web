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
	//DISABLE EVENTS AND ASPIRATION
	async rewrites() {
		return [
		  {
			source: '/main/aspiration',
			destination: '/main',
		  },
		  {
			source: '/main/event',
			destination: '/main',
		  },
		]
	  },
	 
	images : {
		unoptimized : true
	}
	
};

module.exports = nextConfig;

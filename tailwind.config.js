/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			customMd: '768px',
		},
		extend: {
			colors: {
				primary: {
					100: '#3F3F9C',
					200: '#303078',
					300: '#212152',
					400: '#13132F',
				},
				contrast: {
					100: '#F9F9F9',
					200: '#F2F2F2',
				},
				formColor: {
					100: '#E2E2E2',
				},
				secondary: {
					100: '#FFFE5C',
					200: '#FFFD29',
					300: '#F3F100',
					400: '#C2C200',
				},
				customYellow: {
					100: '#F3F100',
					200: '#F3DB00',
				},
				onDrop: 'rgba(63, 63, 156, 0.5)'
			},
		},
		plugins: [],
	},
};

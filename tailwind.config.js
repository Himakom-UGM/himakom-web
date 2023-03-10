/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			Lato: ['Lato', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				about:
					'linear-gradient(to right, rgba(50, 50, 123, 1) 0%, rgba(50, 50, 123, 1) 40%, rgba(50, 50, 123, 0.8) 100%)',
				'about-mobile':
					'linear-gradient(to bottom, rgba(50, 50, 123, 1) 0%, rgba(50, 50, 123, .9) 42%, rgba(50, 50, 123, .7) 82%, rgba(50, 50, 123, 0.5) 100%)',
				'content-overlay':
					'linear-gradient(to bottom, rgba(218, 218, 218, 0.2) 0%, rgba(63, 63, 156, 1) 50%, rgba(63, 63, 156, 1) 100%)',
				'content-overlay-mobile':
					'linear-gradient(to bottom, rgba(218, 218, 218, 0.1) 0%, rgba(63, 63, 156, 1) 87%, rgba(63, 63, 156, 1) 100%)',
				content:
					'linear-gradient(to bottom, rgba(218, 218, 218, 0) 0%,rgba(218, 218, 218, 0) 40%, rgba(63, 63, 156, 1) 50%, rgba(63, 63, 156, 1) 100%)',
				'content-overlaySecondary':
					'linear-gradient(to bottom, rgba(218, 218, 218, 0.2) 0%, rgba(33, 33, 82, 1) 67%, rgba(33, 33, 82, 1) 100%)',
				'content-secondary':
					'linear-gradient(to bottom, rgba(218, 218, 218, 0) 40%, rgba(33, 33, 82, 1) 67%, rgba(33, 33, 82, 1) 100%)',
			},
			colors: {
				blurBackground: 'rgba(255, 255, 255, 0.46)',
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

				onDrop: 'rgba(63, 63, 156, 0.5)',
				screens: {
					customMd: '960px',
				},
			},
			fontFamily: {
				lato: ['Lato', 'serif'],
			},
			screens: {
				customMd: '960px',
				customSm: '320px',
			},
			animation: {
				'slide-down': 'slideDown 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-in-out',
			},
			keyframes: {
				slideDown: {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: 1,
					},
				},
				slideUp: {
					'0%': {
						transform: 'translateY(0)',
						opacity: 1,
					},
					'100%': {
						transform: 'translateY(-100%)',
						opacity: 0,
					},
				},
			},
		},
		dropShadow: {
			'customShadow4-4-14': '4px 4px 14px rgba(0, 0, 0, 0.25)',
			'customShadowS0-4-4': '0px 4px 4px rgba(0, 0, 0, 0.25)',
			'customShadow0-0-4': '0px 0px 4px rgba(0, 0, 0, 0.25)',
		},
		plugins: [],
	},
};

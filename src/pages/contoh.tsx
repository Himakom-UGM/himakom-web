import Info from '@/components/about/Info';
import Program from '@/components/about/Program';

// create lorem with 100 words
const lorem =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisi sapien, sodales eget luctus a, eleifend in metus. Nam vitae nibh at justo ornare pulvinar. Nam eleifend posuere purus in dignissim. Nam eleifend posuere purus in dignissim Nam eleifend posuere purus in dignissim Nam eleifend posuere purus in dignissim Nam eleifend posuere purus in dignissim Nam eleifend posuere purus in dignissim Nam eleifend posuere purus in dignissim Nam eleifend posuere purus in dignissim ignissim Nam eleifend posuere purus in digniss';
const programs = [
	{
		title: 'Program 1',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 2',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 3',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 4',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 5',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 6',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 7',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 8',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},

	{
		title: 'Program 8',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 9',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 10',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 11',
		date: '2021-01-01',
		description: lorem,
		image: 'https://picsum.photos/1920/1080',
	},
];

export default function Contoh() {
	// return <Program data={programs} />;
	return <Info/>
}

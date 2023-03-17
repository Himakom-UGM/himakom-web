import Info from '@/components/about/Info';
import Program from '@/components/about/Program';

const programs = [
	{
		title: 'Program 1',
		date: '2021-01-01',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 2',
		date: '2021-01-01',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
		image: 'https://picsum.photos/1920/1080',
	},
	{
		title: 'Program 3',
		date: '2021-01-01',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
		image: 'https://picsum.photos/1920/1080',
	}
];

export default function Contoh() {
	return <Program data={programs} />;
}

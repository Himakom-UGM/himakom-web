import ProgramCard from './ProgramCard';
import styles from './style.module.css';

const program = [
	{
		id: '1',
		title: 'Program 1',
	},
	{
		id: '2',
		title: 'Program 2',
	},
	{
		id: '3',
		title: 'Program 3',
	},
	{
		id: '4',
		title: 'Program 4',
	},
	{
		id: '5',
		title: 'Program 5',
	},
	{
		id: '6',
		title: 'Program 6',
	},
	{
		id: '7',
		title: 'Program 7',
	},
	{
		id: '8',
		title: 'Program 8',
	},
	{
		id: '9',
		title: 'Program 9',
	},
	{
		id: '10',
		title: 'Program 10',
	},
];

export default function Program() {
	return (
		<section className='py-20'>
			<h1 className="pb-16 text-center text-4xl font-semibold lg:text-5xl">
				Our Programs
			</h1>
			<div className="mx-auto flex overflow-y-hidden max-h-[560px] max-w-[60%] justify-center gap-x-6">
				<div
					className={styles.scroll + " flex max-h-full basis-2/5 flex-col gap-y-4 overflow-y-scroll pr-3"}
				>
					{program.map((item) => {
						return (
							<div
								key={item.id}
								className="rounded-lg bg-[#32327B] px-6 py-2 text-3xl text-white"
							>
								<h1>{item.title}</h1>
							</div>
						);
					})}
				</div>
				<ProgramCard />
			</div>
		</section>
	);
}

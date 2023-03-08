import { getDivisionsSync } from '@/utilites/getDivisions';
import Link from 'next/link';

export default function Division() {
	const division = getDivisionsSync();
	return (
		<ul className="absolute left-full z-10 flex w-44 flex-col gap-y-2 rounded-lg border border-black bg-[#F8F8F8] px-4 py-5 font-medium">
			{division.map((division: any) => (
				<li key={division.id} className='hover:font-semibold'>
					<Link href={`/division/${division.slug}`}>{division.name}</Link>
				</li>
			))}
		</ul>
	);
}

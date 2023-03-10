import { getDivisionsSync } from '@/utilites/getDivisions';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Division() {
	const division = getDivisionsSync();
	return (
		<motion.ul
			animate={{ y: 0, opacity: 1 }}
			initial={{ y: '-10', opacity: 0 }}
			exit={{ y: '-10', opacity: 0 }}
			className="absolute left-full z-10 flex w-44 flex-col gap-y-2 rounded-lg border border-black bg-[#F8F8F8] px-4 py-5 font-medium"
		>
			{division.map((division: any) => (
				<li key={division.id} className="hover:font-semibold">
					<Link href={`/about/${division.slug}`}>{division.name}</Link>
				</li>
			))}
		</motion.ul>
	);
}

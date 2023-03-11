import DropDown from '@/svg/dropdown';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProfileMenu() {
	return (
		<motion.ul
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			className="-my-3 flex max-w-sm flex-col gap-y-2 pl-6 text-base font-medium"
		>
			<li>
				<Link href="/about">About Us</Link>
			</li>
			<li>
				<Link href="/cabinet">Cabinet</Link>
			</li>
			<li>
				<Link href="/division">Division</Link>
			</li>
		</motion.ul>
	);
}

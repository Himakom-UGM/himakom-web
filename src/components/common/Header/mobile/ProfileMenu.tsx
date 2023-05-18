import DropDown from '@/svg/dropdown';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

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
				<p>Divisions</p>
				<AnimatePresence>
					<motion.ul
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
						exit={{ opacity: 0, y: -10 }}
						className=" top-0 left-0 w-full rounded-md"
					>
						<li className="py-1 px-4 hover:bg-gray-100">
							<Link href="/about/psdma">PSDMA</Link>
						</li>
						<li className="py-1 px-4 hover:bg-gray-100">
							<Link href="/about/mikat">Mikat</Link>
						</li>
						<li className="py-1 px-4 hover:bg-gray-100">
							<Link href="/about/hublu">Hublu</Link>
						</li>
						<li className="py-1 px-4 hover:bg-gray-100">
							<Link href="/about/kewirausahaan">Kewirausahaan</Link>
						</li>
						<li className="py-1 px-4 hover:bg-gray-100">
							<Link href="/about/kpm">KPM</Link>
						</li>
						<li className="py-1 px-4 hover:bg-gray-100">
							<Link href="/about/po">PO</Link>
						</li>
						
					</motion.ul>
				</AnimatePresence>
			</li>
		</motion.ul>
	);
}

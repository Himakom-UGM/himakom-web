import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppContext } from '@/context/state';

export default function MobileMenu() {
	const { hamburger } = useAppContext();
	return (
		<AnimatePresence>
			{hamburger && (
				<motion.nav
					animate={{ y: 0 }}
					initial={{ y: '-100%' }}
					exit={{ y: '-100%' }}
					transition={{ type: 'just' }}
					className="absolute z-20 w-full bg-[#f6f6f6] pb-6 customMd:hidden"
				>
					<ul className="mt-4 flex flex-col gap-y-6 pl-8 text-lg font-semibold">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/profile">Profile</Link>
						</li>
						<li>
							<Link href="/event">Events</Link>
						</li>
						<li>
							<Link href="/exam">Exam Archive</Link>
						</li>
						<li>
							<Link href="/related">Related</Link>
						</li>
						<li>
							<Link href="/aspiration">Aspiration</Link>
						</li>
						<li>
							<Link href="/contact">Contact Us</Link>
						</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}

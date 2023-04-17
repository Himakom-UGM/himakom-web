import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppContext } from '@/context/state';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowDown, ArrowUp } from './Arrow';
import ProfileMenu from './mobile/ProfileMenu';
import RelatedMenu from './mobile/RelatedMenu';

export default function MobileMenu() {
	const { hamburger } = useAppContext();
	const [profileArrow, setProfileArrow] = useState<string>('down');
	const [relatedArrow, setRelatedArrow] = useState<string>('down');

	const profileArrowHandler = () => {
		setProfileArrow(profileArrow === 'down' ? 'up' : 'down');
	};

	const relatedArrowHandler = () => {
		setRelatedArrow(relatedArrow === 'down' ? 'up' : 'down');
	};

	return (
		<AnimatePresence>
			{hamburger && (
				<motion.nav
					animate={{ y: 0 }}
					initial={{ y: '-100%' }}
					exit={{ y: '-100%' }}
					transition={{ type: 'just' }}
					className="z-20 shadow-lg w-full bg-[#f6f6f6] pb-6 customMd:hidden"
				>
					<ul className="mt-4 flex flex-col gap-y-6 pl-8 text-lg font-semibold">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li
							onClick={profileArrowHandler}
							className="flex items-center justify-between pr-12"
						>
							<p>Profile</p>
							{profileArrow === 'down' ? <ArrowDown /> : <ArrowUp />}
						</li>
						<AnimatePresence>
							{profileArrow === 'up' && <ProfileMenu />}
						</AnimatePresence>
						{/* <li>
							<Link href="/event">Events</Link>
						</li> */}
						<li>
							<Link href="/exam">Exam Archive</Link>
						</li>
						<li
							onClick={relatedArrowHandler}
							className="flex items-center justify-between pr-12"
						>
							<Link href="/related">Related</Link>
							{relatedArrow === 'down' ? <ArrowDown /> : <ArrowUp />}
						</li>
						<AnimatePresence>
							{relatedArrow === 'up' && <RelatedMenu />}
						</AnimatePresence>
						{/* <li>
							<Link href="/aspiration">Aspiration</Link>
						</li> */}
						<li>
							<Link href="/contact">Contact Us</Link>
						</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}

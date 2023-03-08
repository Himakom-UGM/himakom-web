import Link from 'next/link';
import Dropdown from '../ui/Dropdown';
import { useState } from 'react';
import ProfileMenu from './ProfileMenu';
import RelatedMenu from './RelatedMenu';
import { AnimatePresence } from 'framer-motion';

export default function DesktopNav() {
	const [profileOnHover, setProfileOnHover] = useState<boolean>(false);
	const [relatedOnHover, setRelatedOnHover] = useState<boolean>(false);

	const profileOnHoverHandler = () => {
		setProfileOnHover(true);
	};
	const relatedOnHoverHandler = () => {
		setRelatedOnHover(true);
	};
	const profileMouseOutHandler = () => {
		setProfileOnHover(false);
	};
	const relatedMouseOutHandler = () => {
		setRelatedOnHover(false);
	};

	console.log('profileOnHover', profileOnHover);

	return (
		<nav className="text- relative hidden items-center customMd:flex">
			<ul className="flex items-center justify-between gap-x-6 font-semibold">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li
					onMouseEnter={profileOnHoverHandler}
					onMouseOver={profileOnHoverHandler}
					onMouseLeave={profileMouseOutHandler}
					className="relative flex items-center gap-x-1 py-2"
				>
					<button>Profile</button>
					<Dropdown />
					<AnimatePresence>
						{profileOnHover && (
							<ProfileMenu onMouseOver={profileOnHoverHandler} />
						)}
					</AnimatePresence>
				</li>
				<li>
					<Link href="/event">Events</Link>
				</li>
				<li>
					<Link href="/exam">Exam Archive</Link>
				</li>
				<li
					onMouseEnter={relatedOnHoverHandler}
					onMouseOver={relatedOnHoverHandler}
					onMouseLeave={relatedMouseOutHandler}
					className="relative flex items-center gap-x-1 py-2"
				>
					<button>Related</button>
					<Dropdown />
					<AnimatePresence>{relatedOnHover && <RelatedMenu />}</AnimatePresence>
				</li>
				<li>
					<Link href="/aspiration">Aspiration</Link>
				</li>
			</ul>
		</nav>
	);
}

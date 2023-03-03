import Link from 'next/link';
import DropDown from '@/svg/dropdown';

export default function Menu() {
	return (
		<nav>
			<ul className="flex items-center gap-x-6 font-semibold">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li className="flex cursor-pointer">
					<span>Profile</span>
					<DropDown />
				</li>
				<li>
					<Link href="/event">Events</Link>
				</li>
				<li>
					<Link href="/exam">Exam Archive</Link>
				</li>
				<li className="flex cursor-pointer">
					<span>Related</span>
					<DropDown />
				</li>
				<li>
					<Link href="/aspiration">Aspiration</Link>
				</li>
			</ul>
		</nav>
	);
}

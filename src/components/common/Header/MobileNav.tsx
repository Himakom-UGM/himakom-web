import Link from 'next/link'

export default function MobileMenu() {
	return (
		<nav className="customMd:hidden absolute z-10 bg-[#f6f6f6] w-full pb-6">
			<ul className="flex flex-col pl-8 text-lg mt-4 font-semibold gap-y-6">
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
		</nav>
	);
}

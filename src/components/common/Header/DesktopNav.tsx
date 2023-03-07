import Link from "next/link";

export default function DesktopNav() {
	return (
		<nav className="hidden customMd:flex items-center">
			<ul className="flex items-center gap-x-6 justify-between">
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
			</ul>
		</nav>
	);
}

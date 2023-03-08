import Link from 'next/link';
import {motion} from 'framer-motion';

export default function RelatedMenu() {
	return (
		<ul className="absolute font-medium top-full z-20 flex w-44  flex-col gap-y-2 rounded-lg border border-black bg-[#F8F8F8] px-4 py-5">
			<li className="hover:font-semibold">
				<Link href="https://omahti.web.id">OmahTI</Link>
			</li>
			<li className="hover:font-semibold">
				<Link href="https://dcse.fmipa.ugm.ac.id">
					Department of Computer Sciences and Electronics (DCSE)
				</Link>
			</li>
		</ul>
	);
}

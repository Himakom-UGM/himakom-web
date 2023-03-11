import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RelatedMenu() {
	return (
		<motion.ul
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			className="-my-3 flex max-w-sm flex-col gap-y-2 pl-6 text-base font-medium"
		>
			<li>
				<Link href="https://omahti.web.id">OmahTI</Link>
			</li>
			<li>
				<Link href="https://dcse.fmipa.ugm.ac.id">
					Department of Computer Sciences and Electronics (DCSE)
				</Link>
			</li>
		</motion.ul>
	);
}

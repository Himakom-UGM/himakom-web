import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RelatedMenu() {
	return (
		<motion.ul
			animate={{ y: 0, opacity: 1 }}
			initial={{ y: '-10', opacity: 0 }}
			exit={{ y: '-10', opacity: 0 }}
			className="absolute top-full z-20 flex w-44 flex-col gap-y-2 rounded-lg border border-black bg-[#F8F8F8] px-4 py-5 font-medium"
		>
			<li className="hover:font-semibold">
				<Link target='_blank' href="https://omahti.web.id">OmahTI</Link>
			</li>
			<li className="hover:font-semibold">
				<Link target='_blank' href="https://dcse.fmipa.ugm.ac.id">
					Department of Computer Sciences and Electronics (DCSE)
				</Link>
			</li>
		</motion.ul>
	);
}

import DropDown from '@/svg/dropdown';
import Link from 'next/link';
import { useState } from 'react';
import DivisionMenu from './DivisionMenu';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProfileMenu(props: { onMouseOver: () => void }) {
	const [divisions, setDivisions] = useState<boolean>(false);

	const mouseOverHandler = () => {
		props.onMouseOver();
	};
	const activateDivisions = () => {
		setDivisions(true);
	};
	const deactivateDivisions = () => {
		setDivisions(false);
	};

	return (
		<motion.ul
			animate={{ y: 0, opacity: 1 }}
			initial={{ y: '-10', opacity: 0 }}
			exit={{ y: '-10', opacity: 0 }}
			onMouseEnter={mouseOverHandler}
			className="absolute top-full z-20 flex w-44 flex-col gap-y-2 rounded-lg pb-4 border border-black bg-[#F8F8F8] px-4 pt-5 font-medium"
		>
			<li className="hover:font-semibold">
				<Link href="/about">About Us</Link>
			</li>
			<li className="hover:font-semibold">
				<Link href="/cabinet">Cabinet</Link>
			</li>
			{/* <li
				onMouseEnter={activateDivisions}
				onMouseMove={activateDivisions}
				onMouseLeave={deactivateDivisions}
				className="relative flex justify-between pb-5 hover:font-semibold"
			>
				<button>Division</button>
				<DropDown />
				<AnimatePresence>{divisions && <DivisionMenu />}</AnimatePresence>
			</li> */}
		</motion.ul>
	);
}

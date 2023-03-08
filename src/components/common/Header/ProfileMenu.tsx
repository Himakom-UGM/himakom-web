import DropDown from '@/svg/dropdown';
import Link from 'next/link';
import { useState } from 'react';
import DivisionMenu from './DivisionMenu';

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
		<ul
			onMouseEnter={mouseOverHandler}
			className="absolute top-full z-20 flex w-44 flex-col gap-y-2 rounded-lg border border-black bg-[#F8F8F8] px-4 pt-5 font-medium"
		>
			<li className="hover:font-semibold">
				<Link href="/about">About Us</Link>
			</li>
			<li className="hover:font-semibold">
				<Link href="/cabinet">Cabinet</Link>
			</li>
			<li
				onMouseEnter={activateDivisions}
				onMouseMove={activateDivisions}
				onMouseLeave={deactivateDivisions}
				className="relative pb-5 flex justify-between hover:font-semibold"
			>
				<button>Division</button>
				<DropDown />
				{divisions && <DivisionMenu />}
			</li>
		</ul>
	);
}

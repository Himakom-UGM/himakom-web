import { useContext, useEffect, useState } from 'react';
import DesktopNav from './DesktopNav';
import Hamburger from './Hamburger';
import HimakomBrand from './HimakomBrand';
import MobileMenu from './MobileNav';
import { useAppContext } from '@/context/state';
import {
	motion,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion';

export default function Header() {
	const [hidden, setHidden] = useState<boolean>(false);
	const { scrollY } = useScroll();
	const y = useMotionValue(0);

	function update() {
		if (scrollY?.get() < scrollY?.getPrevious()) {
			setHidden(false);
		} else if (
			scrollY?.get() > scrollY?.getPrevious() &&
			scrollY?.get() > 100
		) {
			setHidden(true);
		}
	}

	const variants = {
		/** this is the "visible" key and it's respective style object **/
		visible: { opacity: 1, y: 0, x: '-50%' },
		/** this is the "hidden" key and it's respective style object **/
		hidden: { opacity: 0, y: -20, x: '-50%' },
	};

	useMotionValueEvent(scrollY, 'change', update);

	return (
		<div className="bg-[#F0F0F0]">
			<motion.div
				animate={hidden ? 'hidden' : 'visible'}
				variants={variants}
				transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.7 }}
				className="fixed left-1/2 z-30 flex w-full  justify-between bg-[#F0F0F0] px-6 text-black customMd:justify-around customMd:py-1 customMd:px-0"
			>
				<HimakomBrand />
				<Hamburger />
				<DesktopNav />
			</motion.div>
			<MobileMenu />
		</div>
	);
}

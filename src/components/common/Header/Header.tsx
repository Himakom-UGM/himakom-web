import { useContext } from 'react';
import DesktopNav from './DesktopNav';
import Hamburger from './Hamburger';
import HimakomBrand from './HimakomBrand';
import MobileMenu from './MobileNav';
import { useAppContext } from '@/context/state';
import ProfileMenu from './ProfileMenu';

export default function Header() {
	const {hamburger, updateHamburger} = useAppContext();
	return (
		<>
			<div className="relative flex justify-between text-black bg-[#F0F0F0] px-6 py-2 customMd:justify-around customMd:px-0">
				<HimakomBrand />
				<Hamburger />
				<DesktopNav />
			</div>
			{hamburger && <MobileMenu />}
		</>
	);
}

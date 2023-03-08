import { useContext } from 'react';
import DesktopNav from './DesktopNav';
import Hamburger from './Hamburger';
import HimakomBrand from './HimakomBrand';
import MobileMenu from './MobileNav';
import { useAppContext } from '@/context/state';
import ProfileMenu from './ProfileMenu';

export default function Header() {
	const { hamburger, updateHamburger } = useAppContext();
	return (
		<div className="bg-[#F0F0F0]">
			<div className="relative z-30 max-w-7xl bg-[#F0F0F0] mx-auto flex justify-between px-6 customMd:py-2 text-black customMd:justify-around customMd:px-0">
				<HimakomBrand />
				<Hamburger />
				<DesktopNav />
			</div>
			<MobileMenu />
		</div>
	);
}

import LogoHimakom from '@/svg/logo-himakom';
import Menu from './Menu';

export default function Header() {
	return (
		<div className="mb-[2px] flex items-center justify-around bg-[#f6f6f6] text-black shadow-md shadow-gray-400">
			<div className="flex cursor-default items-center gap-x-2 py-[5px] text-2xl font-bold">
				<LogoHimakom />
				<span>Himakom UGM</span>
			</div>
			<Menu />
		</div>
	);
}

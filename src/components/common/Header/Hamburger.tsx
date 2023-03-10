import Image from 'next/image';
import { useAppContext } from '@/context/state';

export default function Hamburger() {
	const { hamburger, updateHamburger } = useAppContext();
	return (
		<button className="customMd:hidden" onClick={updateHamburger}>
			{!hamburger && (
				<Image
					src="/hamburger.svg"
					alt="Hamburger"
					width={50}
					height={50}
					className="w-9 lg:w-10"
				/>
			)}
			{hamburger && (
				<div className='w-9 flex justify-center'>
					<Image
						src="/close.svg"
						alt="Close"
						width={50}
						height={50}
						className="w-5 lg:w-8"
					/>
				</div>
			)}
		</button>
	);
}

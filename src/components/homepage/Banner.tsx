import Image from 'next/image';
import LeftBottom from './decoration/LeftBottom';
import RightTop from './decoration/RightTop';
import RightBottom from './decoration/RightBottom';
import LeftTop from './decoration/LeftTop';
import { motion } from 'framer-motion';
import Bottom from './decoration/Bottom';
import About from './About';

export default function Banner() {
	return (
		<div className="relative mx-auto w-full max-w-[1920px] overflow-x-hidden overflow-y-hidden">
			<Image
				src="/main/images/bg/landing.png"
				// width={1438}
				// height={892}
				fill
				alt="bg"
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
					zIndex: -1,
				}}
			/>
			<Image
				src="/main/images/bg/H.png"
				width={559}
				height={559}
				alt="bg"
				className='absolute w-[45vw] top-1/2 customMd:top-[40%] -translate-y-1/2 left-1/2 -translate-x-1/2'
				style={{
					objectFit: 'cover',
					zIndex: -1,
				}}
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8, duration: 0.2 }}
				className="relative hidden flex-col items-center pt-32 font-semibold text-primary-300 customMd:flex xl:pt-44"
			>
				<h1 className="mb-[2px] text-3xl italic xl:text-[32px]">
					Universitas Gadjah Mada
				</h1>
				<h2 className="text-6xl font-extrabold xl:text-[87px]">
					Himpunan Mahasiswa
				</h2>
				<h3 className="mt-2 text-4xl xl:text-[50px]">Ilmu Komputer</h3>
			</motion.div>
			<div className="mx-auto w-[90%] max-w-[480px] pt-44 text-center text-4xl font-semibold text-primary-300 md:max-w-[60%] customMd:hidden">
				<h1>Himpunan Mahasiwa Ilmu Komputer</h1>
				<h2 className="mt-2 text-2xl font-medium">Universitas Gadjah Mada</h2>
			</div>
			<motion.div
				initial={{ y: '100vh', opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					delay: 0.1,
					duration: 0.35,
					type: 'spring',
					stiffness: 150,
					damping: 16,
				}}
			>
				<Image
					src="/main/images/bg/foto-landing.png"
					width={1440}
					height={810}
					className="pointer-events-none mx-auto mt-16 customMd:w-[75%]"
					alt="foto"
				/>
			</motion.div>
			<RightTop />
			<RightBottom />
			<LeftTop />
			<LeftBottom />
			<Bottom />
		</div>
	);
}

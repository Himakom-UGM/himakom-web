import Image from 'next/image';
import LeftBottom from './decoration/LeftBottom';
import RightTop from './decoration/RightTop';
import RightBottom from './decoration/RightBottom';
import LeftTop from './decoration/LeftTop';
import { motion } from 'framer-motion';
import Bottom from './decoration/Bottom';

export default function Banner() {
	return (
		<div className="relative mx-auto w-full max-w-7xl">
			<Image
				src="/images/bg/landing.png"
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
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8, duration: 0.2 }}
				className="relative hidden flex-col items-center pt-20 font-semibold text-primary-300 customMd:flex 2xl:pt-28"
			>
				<h1 className="mb-[2px] text-xl italic 2xl:text-xl">
					Universitas Gadjah Mada
				</h1>
				<h2 className="text-5xl font-extrabold 2xl:text-6xl">
					Himpunan Mahasiswa
				</h2>
				<h3 className="text-3xl 2xl:text-4xl">Ilmu Komputer</h3>
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
					src="/images/bg/foto-landing.png"
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
            <Bottom/>
		</div>
	);
}

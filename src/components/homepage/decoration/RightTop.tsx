import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RightTop() {
	return (
		<motion.div
			initial={{ opacity: 0, x: '10vw' }}
			animate={{ opacity: 1, x: 0 }}
			className={
				'pointer-events-none absolute top-0 right-0 z-0 w-[22%] md:w-[18%] customMd:w-[15%]'
			}
			transition={{ delay: 0.5, type: 'keyframes' }}
		>
			<Image
				src={'/images/decorative/rt.svg'}
				alt={'Right Top'}
				width={205}
				height={480}
			/>
		</motion.div>
	);
}
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Bottom() {
	return (
		<motion.div
			initial={{ y: '10vh', x: '-50%', opacity: 0 }}
			animate={{ y: 0, x: '-50%', opacity: 1 }}
			transition={{ delay: 0.5, type: 'keyframes' }}
			className={
				'pointer-events-none absolute bottom-0 left-1/2 z-10 flex w-[44%] gap-x-4 md:w-[36%] customMd:w-[40%]'
			}
		>
			<Image
				src="/main/images/decorative/b.svg"
				alt="Bottom"
				width={205}
				height={480}
			/>
			<Image
				src="/main/images/decorative/b.svg"
				alt="Bottom"
				width={205}
				height={480}
			/>
		</motion.div>
	);
}

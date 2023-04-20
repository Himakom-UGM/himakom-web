import { AspirationType } from '@/utils/contentful/contentfulTypes';
import { Entry } from 'contentful';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function AspirationCardMobile({
	entry,
}: {
	entry: AspirationType;
}) {
	const [enabled, setEnabled] = useState(false);
	const variants = {
		hidden: { y: -20, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<div
			onClick={() => setEnabled(!enabled)}
			className="flex cursor-pointer flex-col justify-between gap-4 px-4 pt-6  "
		>
			<p className=" overflow-hidden text-ellipsis  text-xl font-extrabold   ">
				{entry.subject}
			</p>
			<div className=" ">
				<p>From: {entry.from}</p>
				<p>To: {entry.to}</p>
			</div>
			<AnimatePresence>
				{enabled && (
					<motion.p
						key="message"
						className="overflow-hidden text-ellipsis"
						initial="hidden"
						animate="visible"
						exit={{ opacity: 0 }}
						variants={variants}
					>
						{entry.message}
					</motion.p>
				)}
			</AnimatePresence>
		</div>
	);
}

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Timeline from './Timeline';

export default function Archives() {
	return (
		<div>
			<div className="bg-[#F3BE00] py-12">
				<h1 className="text-center text-5xl font-semibold">Archives</h1>
				<p className="mx-auto mt-4 text-center md:max-w-[540px]">
					Jelajahi sejarah HIMAKOM dan lihat momen-momen yang membentuk kami.
					Telusuri arsip kami dan temukan tonggak-tonggak sejarah penting yang
					telah membawa kami ke saat ini.
				</p>
			</div>
			<div className="relative">
				<Image
					src={'/images/bg/foto_angkatan.png'}
					alt="hero"
					fill
					className="-z-[9999] object-cover object-center"
				/>
				<div className="absolute top-0 -z-10 h-full w-full bg-blurBackgroundSoft"></div>
				<Timeline />
			</div>
		</div>
	);
}

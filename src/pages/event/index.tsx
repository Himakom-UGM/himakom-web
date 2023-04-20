import Head from 'next/head';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import React from 'react';
import {Events, Archives} from '@/components/event';

interface GridComponentProps {
	image: string | StaticImageData;
	divisi: string;
}

// const [isOpen, setIsOpen] = useState(false);
// return (

// )

export default function Event() {
	return (
		<>
			<Head>
				<title>Himakom&apos;s Events</title>
			</Head>
			<main>
				<Events />
				<Archives/>
			</main>
		</>
	);
}

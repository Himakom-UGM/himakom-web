import Coba from '@/components/division/Coba';
import Hero from '@/components/division/Hero';
import Members from '@/components/division/Members';
import Program from '@/components/division/Program';
import Head from 'next/head';
import Image from 'next/image';

export default function Division() {
	return (
		<>
			<Head>
				<title>Division</title>
			</Head>
			<main className="">
				<Image
					src="/main/images/bg/division.png"
					alt="background"
					fill
					className="-z-10 object-cover"
				/>
				<Hero />
				<Members />
				<Program />
				{/* <Coba/> */}
			</main>
		</>
	);
}

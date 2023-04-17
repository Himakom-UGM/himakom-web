import AspirationCard from '@/components/aspiration/AspirationCard';
import AspirationsDesktop from '@/components/aspiration/AspirationsDesktop';
import AspirationsMobile from '@/components/aspiration/AspirationsMobile';
import Form from '@/components/aspiration/Form';
import Layout from '@/components/aspiration/Layout';
import useMediaQuery from '@/hooks/useMediaQuery';
import { contentfulClientCS } from '@/utils/contentful/contentfulClient';
import { AspirationType } from '@/utils/contentful/contentfulTypes';
import { Entry, EntryCollection } from 'contentful';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
	const entries = await contentfulClientCS.getEntries<
		EntryCollection<AspirationType>
	>({
		content_type: 'aspiration',
	});

	return {
		props: { entries },
	};
}


export default function Aspiration({
	entries,
}: {
	entries: EntryCollection<AspirationType>;
}) {
	const [searchValue, setSearchValue] = useState('');
	const [filteredEntries, setFilteredEntries] = useState(entries.items);

	const isMobile = useMediaQuery(960);

	useEffect(() => {
		const filtered = entries.items.filter((entry) => {
			return entry.fields.subject
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});
		setFilteredEntries(filtered);
	}, [entries.items, searchValue]);

	return (
		<>
			<Head>
				<title>Aspiration</title>
			</Head>
			<div className="mx-auto bg-primary-100 pt-10 ">
				<div className="relative z-10 rounded-b-full bg-primary-300 customMd:p-10">
					<Image
						src="/main/images/bg/aspiration.png"
						fill
						alt="bg"
						style={{ zIndex: -2 }}
					/>
					<div className="relative  w-full overflow-hidden rounded-b-xl  ">
						<Image
							src="/main/images/bg/hero.svg"
							fill
							quality={100}
							alt="hero"
							className=" object-cover"
							style={{
								zIndex: -1,
							}}
						/>
						<div className="mx-auto grid max-w-[640px] grid-cols-7 items-center p-12 px-6 customMd:max-w-full customMd:gap-x-14 customMd:px-16">
							<div className="col-span-7 flex flex-col gap-y-8 text-contrast-100 customMd:col-span-3">
								<h1 className=" flex flex-col customMd:mt-0">
									<span className="text-5xl font-semibold md:text-6xl">
										Aspirations
									</span>{' '}
									<span className="text-4xl font-medium md:text-5xl">
										for the future.
									</span>
								</h1>
								<p className="w-full text-justify leading-tight customMd:leading-normal xl:w-[90%]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
									eu turpis molestie, dictum est a, mattis tellus. Sed
									dignissim, metus nec fringilla accumsan, risus sem
									sollicitudin lacus, ut interdum tellus elit sed risus.
									Maecenas eget condimentum velit, sit amet feugiat lectus.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
									eu turpis molestie, dictum est a, mattis tellus. Sed
									dignissim, metus nec fringilla accumsan, risus sem
									sollicitudin lacus, ut interdum tellus elit sed risus.
									Maecenas eget condimentum velit, sit amet feugiat lectus.{' '}
								</p>
							</div>
							<div className="col-span-7 h-full customMd:col-span-4">
								<Layout />
							</div>
						</div>
					</div>
				</div>
				<section className=" relative flex w-full flex-col items-center bg-primary-100 px-4 pb-16">
					<div className="z-10 w-screen   rounded-b-3xl bg-contrast-100 pt-12 pb-16">
						<p className=" mx-auto w-64  text-center text-5xl font-extrabold text-primary-100 customMd:w-full ">
							Collective Aspirations
						</p>
					</div>
					<div className="mx-auto w-full max-w-[640px] customMd:max-w-none customMd:px-20  ">
						<input
							onChange={(event) => setSearchValue(event.target.value)}
							placeholder="Find Aspiration"
							className="  shadow-3xl relative z-20  -mt-8 	 h-12 w-full rounded-lg border border-gray-200 bg-contrast-100  px-12 text-lg shadow-2xl customMd:h-20 "
						/>
					</div>
					{isMobile ? (
						<AspirationsMobile filteredEntries={filteredEntries} />
					) : (
						<AspirationsDesktop
							filteredEntries={filteredEntries}
						/>
					)}
					{/* <Image
						width={300}
						height={300}
						alt="decoration_left"
						className=" absolute bottom-0 left-0"
						src="/main/aspiration/decoration_left.svg"
					/> */}
					<Image
						width={300}
						height={300}
						alt="decoration_right"
						className=" absolute bottom-0 right-0"
						src="/main/aspiration/decoration_right.svg"
					/>
				</section>
			</div>
		</>
	);
}

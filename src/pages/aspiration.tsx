import AspirationCard from '@/components/aspiration/AspirationCard';
import Form from '@/components/aspiration/Form';
import Layout from '@/components/aspiration/Layout';
import { contentfulClient } from '@/utils/contentful/contentfulClient';
import { AspirationEntry } from '@/utils/contentful/contentfulTypes';
import { EntryCollection } from 'contentful';
import Head from 'next/head';
import Image from 'next/image';

export async function getServerSideProps() {
	const entries = await contentfulClient.getEntries<
		EntryCollection<AspirationEntry>
	>({
		content_type: 'aspiration',
	});

	console.log(entries);

	return {
		props: { entries },
	};
}

export default function Aspiration({
	entries,
}: {
	entries: EntryCollection<AspirationEntry>;
}) {
	console.log(entries.items);
	return (
		<>
			<Head>
				<title>Aspiration</title>
			</Head>
			<div className=" bg-primary-100">
				<div className="relative z-10 rounded-b-full bg-primary-300 customMd:p-10   ">
					<Image
						src="/images/bg/aspiration.png"
						fill
						alt="bg"
						style={{ zIndex: -2 }}
					/>
					<div className="relative h-full w-full overflow-hidden rounded-xl ">
						<Image
							src="/images/bg/hero.png"
							fill
							quality={100}
							alt="hero"
							className=" object-cover"
							style={{
								zIndex: -1,
							}}
						/>
						<div className="grid grid-cols-7 items-center p-12 px-6 customMd:gap-x-14 customMd:px-16">
							<div className="text-white col-span-7 flex flex-col gap-y-8 text-contrast-100 customMd:col-span-3">
								<h1 className=" flex flex-col customMd:mt-0">
									<span className="text-5xl font-semibold md:text-6xl">
										Aspirations
									</span>{' '}
									<span className="text-4xl font-medium md:text-5xl">
										for the future.
									</span>
								</h1>
								<p className="text-justify leading-tight customMd:leading-normal">
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
							<div className="col-span-7 customMd:col-span-4">
								<Layout />
							</div>
						</div>
					</div>
				</div>
				<section className=" w-full bg-primary-100 ">
					<div className="z-10 rounded-b-3xl  bg-contrast-100 pt-12 pb-16">
						<p className=" mx-auto w-64  text-center text-5xl font-extrabold text-primary-100 customMd:w-full ">
							Collective Aspirations
						</p>
					</div>
					<div className="w-full px-4 customMd:px-20 ">
						<input
							placeholder="Find Aspiration"
							className="  -mt-8 h-12 w-full  rounded-lg	 border bg-contrast-100  px-12 text-lg shadow-2xl customMd:h-20 "
						/>
					</div>

					<div className="  mx-20 mt-16 grid grid-cols-4 gap-8 text-primary-100  ">
						{entries.items.map((entry) => (
							<AspirationCard
								key={entry.sys.id}
								subject={entry.fields.subject}
								from={entry.fields.from ? entry.fields.from : 'Anonymous'}
								to={entry.fields.to}
							/>
						))}
					</div>
				</section>
			</div>
		</>
	);
}

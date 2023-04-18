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
import { app, db, getAspirations } from '@/utils/firebase';
import { ReCaptchaV3Provider, initializeAppCheck } from 'firebase/app-check';

declare const self: any;

export default function Aspiration({}: {}) {
	const [searchValue, setSearchValue] = useState('');
	const [entries, setEntries] = useState<AspirationType[]>([]);
	const [filteredEntries, setFilteredEntries] = useState(entries);

	const isMobile = useMediaQuery(960);

	useEffect(() => {
		//ENABLE THIS TO SHOW DEBUG TOKEN IN CONSOLE,
		//BUT MAKE SURE TO DISABLE IT BEFORE DEPLOYING
		//self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

		initializeAppCheck(app, {
			provider: new ReCaptchaV3Provider(
				process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
			),
			isTokenAutoRefreshEnabled: true,
		});

		getAspirations(db).then((data) => {
			console.log(data);
			setEntries(data as AspirationType[]);
		});
	}, []);

	useEffect(() => {
		const filtered = entries.filter((entry) => {
			return entry.subject.toLowerCase().includes(searchValue.toLowerCase());
		});
		setFilteredEntries(filtered);
	}, [searchValue, entries]);

	return (
		<>
			<Head>
				<title>Aspiration</title>
			</Head>
			<div className="mx-auto  pt-10 overflow-x-hidden ">
				<div className="relative z-10 rounded-b-full  customMd:p-10  ">
					<Image
						src="/main/images/bg/aspiration.png"
						fill
						alt="bg"
						style={{ zIndex: -2 }}
					/>
					<div className="relative w-full overflow-hidden  rounded-b-xl   bg-gradient-to-r from-primary-100 to-primary-100/90 customMd:rounded-xl    ">
						<Image
							src="/main/images/bg/patternpad.png"
							fill
							quality={100}
							alt="hero"
							className=" object-cover"
							style={{
								zIndex: -1,
							}}
						/>

						<div className="mx-auto grid max-w-[640px] grid-cols-7 items-center p-12 px-6 customMd:max-w-full customMd:items-start customMd:gap-x-14 customMd:px-16">
							<div className="col-span-7 flex flex-col gap-y-4 text-contrast-100 customMd:col-span-3 customMd:gap-y-8">
								<h1 className=" flex flex-col customMd:mt-0">
									<span className="text-5xl font-semibold md:text-6xl">
										Aspirations
									</span>{' '}
									<span className="text-4xl font-medium md:text-5xl">
										for the future.
									</span>
								</h1>
								<p className="w-full text-justify leading-tight customMd:text-xl customMd:leading-normal xl:w-[90%]">
									Bagian ini dirancang untuk memudahkan teman-teman HIMAKOM
									dalam membagikan aspirasi, ide, maupun saran yang ingin
									disampaikan secara langsung kepada tujuan atau penerima pesan
									yang dituju. Melalui section ini, pengguna website dapat
									menyampaikan aspirasi mereka secara langsung tanpa harus
									melalui proses yang rumit. Dengan adanya section ini,
									diharapkan pengguna website dapat dengan mudah berinteraksi
									dan berkontribusi dalam pengembangan organisasi maupun
									lingkungan sekitar mereka.
								</p>
							</div>
							<div className="col-span-7 h-full customMd:col-span-4">
								<Layout />
							</div>
						</div>
					</div>
				</div>
				<section className=" relative z-0 flex w-full flex-col items-center bg-primary-100 px-4 pb-16">
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
						<AspirationsDesktop filteredEntries={filteredEntries} />
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

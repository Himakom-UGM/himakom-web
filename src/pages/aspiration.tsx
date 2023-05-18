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
import { useQuery } from 'react-query';

declare const window: any;
export default function Aspiration({}: {}) {
	const {
		data: entries,
		isLoading,
		error,
	} = useQuery('aspirations', () => getAspirations(db));

	const [searchValue, setSearchValue] = useState('');
	const [filteredEntries, setFilteredEntries] = useState<
		AspirationType[] | undefined
	>(entries as AspirationType[] | undefined);

	const isMobile = useMediaQuery(960);

	useEffect(() => {
		//ENABLE THIS TO SHOW DEBUG TOKEN IN CONSOLE,
		//BUT MAKE SURE TO DISABLE IT BEFORE DEPLOYING
		//self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

		if (!window.grecaptcha || !window.recaptcha) {
			initializeAppCheck(app, {
				provider: new ReCaptchaV3Provider(
					process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
				),
				isTokenAutoRefreshEnabled: true,
			});
		}
	}, []);

	useEffect(() => {
		console.log(entries);
		if (entries) {
			const filtered = entries.filter((entry) => {
				return entry.subject.toLowerCase().includes(searchValue.toLowerCase());
			});
			setFilteredEntries(filtered as AspirationType[]);
		}
	}, [searchValue, entries]);

	return (
		<>
			<Head>
				<title>Aspiration</title>
			</Head>
			<div className="mx-auto  overflow-x-hidden pt-10 ">
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
					{filteredEntries &&
						(isMobile ? (
							<AspirationsMobile filteredEntries={filteredEntries} />
						) : (
							<AspirationsDesktop filteredEntries={filteredEntries} />
						) 
						)}
					{/* <Image
						width={300}
						height={300}
						alt="decoration_left"
						className=" absolute bottom-0 left-0"
						src="/main/aspiration/decoration_left.svg"
					/> */}
					{(isLoading && !isMobile) && (
						<div role="status">
							<svg
								aria-hidden="true"
								className="mr-2 mt-8 h-8 w-8 animate-spin fill-neutral-400 text-gray-100 "
								viewBox="0 0 100 101"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
							<span className="sr-only">Loading...</span>
						</div>
					)}
					
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

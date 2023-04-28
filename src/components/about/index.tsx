import Image from 'next/image';
import { Lato } from 'next/font/google';

export default function AboutPage() {
	return (
		<>
			<div className="relative flex h-[640px] w-full flex-col items-center bg-gradient-to-b from-[#F8F8F8] to-[#F8F8F8]/70 px-10 pb-10 md:h-[616px] md:px-20 lg:flex-row lg:justify-evenly lg:to-transparent xl:justify-between xl:py-20 xl:px-40 2xl:px-60">
				<Image
					quality={100}
					src={'/main/about/backgroundAbout.png'}
					fill={true}
					alt=""
					className="-z-[9999] hidden lg:block"
				/>
				<Image
					quality={100}
					src={'/main/about/backgroundAboutMobile.png'}
					fill={true}
					objectFit="contain"
					objectPosition="center bottom"
					alt=""
					className="absolute -bottom-5 -z-[9999] block opacity-50 lg:hidden "
				/>
				<div className="md:w-5/6">
					<h1 className="pt-[91px] text-center text-2xl font-bold md:pt-16 md:text-4xl lg:text-start lg:text-5xl xl:text-6xl">
						About Us
					</h1>
					<Image
						quality={100}
						src="/main/about/logoHimakom.svg"
						alt="Logo Himakom"
						width="128"
						height="163"
						className="mt-8 ml-auto mr-auto h-auto md:w-[188px] lg:hidden"
					/>
					<p className="text-justify lg:text-lg xl:text-2xl 2xl:py-10 max-w-[760px]">
						Himpunan Mahasiswa Ilmu Komputer (HIMAKOM) adalah asosiasi mahasiswa
						Ilmu Komputer Universitas Gadjah Mada yang terbentuk sejak tahun
						1998. HIMAKOM menjadi wadah aspirasi seluruh mahasiswa Ilmu Komputer
						dan ikut berkontribusi dalam kegiatan-kegiatan kampus yang
						bermanfaat seperti kegiatan sosial, kunjungan industri, hingga
						seminar dan lomba tingkat nasional. Memiliki Badan Semi Otonom
						bernama Omah TI yang berperan sebagai pusat pengembangan teknologi
						informasi bagi mahasiswa Ilmu Komputer.
					</p>
				</div>
				<div>
					<Image
						quality={100}
						src="/main/about/logoHimakom.svg"
						alt="Logo Himakom"
						width="234"
						height="299"
						className="mt-8 hidden lg:block xl:w-[300px] mr-24"
					/>
				</div>
			</div>

			<div className="relative flex flex-col items-center justify-center px-12 md:px-24 lg:flex-row lg:justify-evenly xl:items-start xl:justify-between xl:px-48 xl:pt-20 2xl:px-96">
				<Image
					src={'/main/about/backgroundVision.png'}
					fill={true}
					quality={100}
					alt=""
					className="-z-[9999]"
				/>
				<Image
					src={'/main/about/backgroundVisionMobile.png'}
					fill={true}
					quality={100}
					alt=""
					className="-z-[9999] object-cover lg:hidden"
				/>
				<div className="flex flex-col text-center lg:w-6/12 lg:justify-center lg:text-start xl:justify-start">
					<h1 className="pt-10 text-2xl font-bold md:text-4xl lg:text-[52px] xl:text-6xl 2xl:text-[72px]">
						Vision
					</h1>
					<h2 className="py-4 md:text-lg lg:text-xl xl:text-2xl xl:leading-10 2xl:py-12 2xl:text-3xl">
						Terwujudnya HIMAKOM sebagai ruang untuk berekspresi, berinovasi agar
						tercipta lingkungan yang solid, dinamis, serta inklusif
					</h2>
				</div>
				<div className="relative">
					<Image
						quality={100}
						src={'/main/about/Kadek.png'}
						alt="Makomji"
						width="177"
						height="266"
						className="h-auto lg:w-[252px] lg:pt-24 xl:w-[378px] xl:pt-0 2xl:w-[500px]"
					/>
				</div>
				<Image
					quality={100}
					src={'/main/about/visionDecoration.svg'}
					alt=""
					width={'103'}
					height="96"
					className="absolute bottom-0 left-0 h-auto md:w-[170px] lg:hidden xl:w-[255px]"
				/>
				<Image
					quality={100}
					src={'/main/about/visionDecoration.svg'}
					alt=""
					width={'103'}
					height="96"
					className="absolute bottom-0 right-0 h-auto scale-x-[-1] transform md:w-[170px] lg:right-0 lg:top-0 lg:rotate-180 lg:scale-x-[1] xl:w-[255px] "
				/>
			</div>
			<section className="2xl:px-70 relative md:px-24 lg:flex xl:px-48 xl:pt-20 ">
				<Image
					src={'/main/backgroundMission.png'}
					fill={true}
					quality={100}
					alt=""
					className="-z-[9999] hidden bg-[#3F3F9B] object-cover lg:block"
				/>
				<Image
					src={'/main/backgroundMissionMobile.png'}
					fill={true}
					quality={100}
					alt=""
					className="-z-[9999] bg-[#3F3F9B] object-cover lg:hidden"
				/>
				<Image
					src="/main/about/missionDecoration.svg"
					alt=""
					quality={100}
					width="103"
					height="96"
					className="absolute bottom-0 right-0 h-auto rotate-180 md:w-[170px] lg:top-0 lg:left-0 lg:rotate-0 xl:w-[255px] "
				/>
				<Image
					src="/main/about/missionDecoration.svg"
					alt=""
					quality={100}
					width="103"
					height="96"
					className="absolute bottom-0 left-0 h-auto rotate-180 scale-x-[-1] transform md:w-[170px] lg:hidden xl:w-[255px]"
				/>
				<div className="relative flex w-full flex-col items-center justify-center lg:flex-row lg:items-end lg:justify-evenly xl:items-stretch xl:justify-between">
					<div className="relative flex items-end">
						<Image
							src="/main/about/Kadek2.png"
							alt="Makomji"
							width="362"
							height="575"
							className="hidden h-auto lg:block lg:w-[282px] xl:w-[378px] xl:pt-0 2xl:w-[500px]"
							objectPosition="bottom"
							quality={100}
						/>
					</div>
					<div className="flex flex-col items-center justify-start text-justify text-white lg:ml-10 lg:w-1/2 lg:items-start lg:py-12 xl:py-0 xl:leading-7 2xl:justify-center ">
						<h1 className="pt-7 text-2xl font-bold md:text-4xl lg:text-[48px] xl:text-6xl 2xl:text-[72px]">
							Mission
						</h1>
						<ol className="list-decimal pt-3 font-medium md:w-2/3 md:px-0 md:text-base lg:w-full lg:text-lg xl:text-2xl xl:leading-9 2xl:pt-8 px-16 customMd:pl-4">
							<li>
								Menciptakan lingkungan dengan suasana yang nyaman melalui 3S
								(Santai, Serius, Selesai)
							</li>
							<li>
								Meningkatkan rasa kebersamaan, kepedulian, dan saling memiliki
								antar mahasiswa ilmu komputer
							</li>
							<li>
								Menjalin kerjasama dan membangun relasi dengan berbagai pihak,
								baik internal maupun eksternal
							</li>
							<li>
								Membangun koordinasi yang aktif dan berkesinambungan secara
								transparan dengan seluruh masyarakat HIMAKOM
							</li>
							<li>
								Mengoptimalkan minat, bakat, serta potensi yang dimiliki anggota
								HIMAKOM
							</li>
						</ol>
					</div>
					<div className="relative flex items-end">
						<Image
							src="/main/about/Kadek2.png"
							alt="Makomji"
							width="177"
							height="241"
							className="h-auto lg:hidden lg:w-[252px] xl:w-[378px] xl:pt-0"
							objectPosition="bottom"
							quality={100}
						/>
					</div>
				</div>
			</section>

			<section className="relative h-full w-full bg-gradient-to-b from-[#F8F8F8] to-[#F8F8F8]/10 lg:to-transparent xl:h-[720px]">
				<Image
					src={'/main/about/backgroundPrinciple.png'}
					fill={true}
					quality={100}
					objectFit={'cover'}
					objectPosition="center"
					alt=""
					className="-z-[9999]"
				/>
				<Image
					quality={100}
					src={'/main/about/principleDecorationMobile.svg'}
					alt=""
					width={'160'}
					height="133"
					className="absolute left-0 top-0 h-auto scale-x-[-1] transform md:hidden"
				/>
				<Image
					quality={100}
					src={'/main/about/principleDecorationMobile.svg'}
					alt=""
					width={'160'}
					height="133"
					className="absolute right-0 h-auto md:hidden"
				/>
				<Image
					quality={100}
					src={'/main/about/principleDecoration.svg'}
					alt=""
					width={'160'}
					height="133"
					className="absolute left-0 hidden h-auto md:block md:w-[330px] lg:w-[475px] xl:w-[550px]"
				/>
				<Image
					quality={100}
					src={'/main/about/principleDecoration.svg'}
					alt=""
					width={'160'}
					height="133"
					className="absolute right-0 hidden h-auto scale-x-[-1] transform md:block md:w-[330px] lg:w-[475px] xl:w-[550px]"
				/>
				<div className="flex h-full mb-10 flex-col items-center justify-center py-44">
					<div className="w-[80%] xl:w-[70%] md:p-4 rounded-xl bg-white shadow-[0px_4px_16px_rgba(33,33,82,0.25)] customMd:w-[1250px] lg:mx-32 lg:w-auto xl:-mt-32 ">
						<h1 className="pt-6 pb-4 text-center text-2xl font-bold lg:text-4xl xl:text-6xl">
							Principle
						</h1>
						<p className="px-10  pb-6 text-justify font-medium lg:text-xl xl:text-2xl mt-6">
							Himpunan Mahasiswa Ilmu Komputer Universitas Gadjah Mada atau
							HIMAKOM UGM memiliki tiga nilai utama yang selalu dibawa dari
							tahun ke tahun, yakni Aspirasi, Inisiasi, dan Perwujudan. Ketiga
							nilai tersebut menjadi sebuah pondasi dari berdirinya HIMAKOM UGM
							sebagai organisasi yang utuh dan berdampak.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

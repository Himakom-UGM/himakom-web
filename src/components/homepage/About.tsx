import Image from 'next/image';

export default function About() {
	return (
		<div className="relative mx-auto h-fit max-w-7xl overflow-y-hidden bg-about-mobile customMd:bg-about">
			<Image
				src="/images/bg/fmipa.png"
				alt="FMIPA UGM"
				width={1920}
				height={1080}
				className="absolute right-0 -z-10 hidden w-[60%] customMd:block"
			/>
			<Image
				src="/images/bg/fmipa.png"
				alt="FMIPA UGM"
				width={1920}
				height={1080}
				className="absolute bottom-0 -z-10 w-full customMd:hidden"
			/>
			<div className="hidden items-center justify-center gap-x-32 py-20 text-white customMd:flex 2xl:py-32 ">
				<div className="max-w-[45%] basis-1/2">
					<h1 className="text-2xl font-semibold xl:text-4xl 2xl:text-5xl">
						About Us
					</h1>
					<p className="mt-5 text-justify text-base xl:text-lg">
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
				<Image
					src={'/images/logo/himakom.svg'}
					alt="Himakom UGM"
					width={280}
					height={50}
					className="w-40 xl:w-52"
				/>
			</div>
			<div className="flex customMd:hidden flex-col items-center gap-y-2 py-16 pt-20 text-white">
				<h1 className="text-xl font-semibold">About Us</h1>
				<Image
					src={'/images/logo/himakom.svg'}
					alt="Himakom UGM"
					width={280}
					height={50}
					className="w-28"
				/>
				<p className="mt-5 text-justify text-base w-[85%]">
					Himpunan Mahasiswa Ilmu Komputer (HIMAKOM) adalah asosiasi mahasiswa
					Ilmu Komputer Universitas Gadjah Mada yang terbentuk sejak tahun 1998.
					HIMAKOM menjadi wadah aspirasi seluruh mahasiswa Ilmu Komputer dan
					ikut berkontribusi dalam kegiatan-kegiatan kampus yang bermanfaat
					seperti kegiatan sosial, kunjungan industri, hingga seminar dan lomba
					tingkat nasional. Memiliki Badan Semi Otonom bernama Omah TI yang
					berperan sebagai pusat pengembangan teknologi informasi bagi mahasiswa
					Ilmu Komputer.
				</p>
			</div>
		</div>
	);
}

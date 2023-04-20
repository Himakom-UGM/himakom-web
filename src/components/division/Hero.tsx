import Image from 'next/image';

const Hero = () => {
	return (
		<div className="pt-36 pb-24">
			<div className="relative flex flex-col items-center gap-y-6 rounded-xl border bg-[#f8f8f8] py-16 px-12 shadow-2xl md:w-[92%] mx-auto customMd:max-w-[90%] xl:max-w-[1440px] customMd:flex-row">
				<div className="relative flex basis-[40%] flex-col items-center gap-y-4">
					<Image
						src="/main/logo_kwrs.png"
						alt="kewirush"
						width={1920}
						height={1080}
						className="w-44 xl:w-56 rounded-xl"
					/>
					<h1 className="text-4xl xl:text-5xl font-semibold">Kewirausahaan</h1>
					<p className="xl:px-12 max-w-xl customMd:max-w-none text-justify text-lg lg:text-2xl">
						Kewirausahaan merupakan sebuah divisi dalam HIMAKOM yang membina
						mahasiswa dalam upaya menanamkan jiwa kewirausahaan dan manajemen
						finansial, serta mengembangkan kreativitas mahasiswa.
					</p>
				</div>
				<div className="flex basis-3/5 place-content-center">
					<Image
						src="/main/images/bg/content_imgdetailpost.png"
						alt="kewirush"
						width={1920}
						height={1080}
						className="w-[80%] rounded-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;

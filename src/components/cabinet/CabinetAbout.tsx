import Image from 'next/image';

export default function CabinetAbout() {
	return (
		<section className="p-9 rounded-xl mx-auto bg-white w-[90%] md:w-[80%]">
			<h1 className="md:hidden text-center text-2xl mb-6 font-bold lg:px-0 lg:pb-2 lg:text-start">
				Arundaya Cakrabuana
			</h1>
			<div className="flex flex-col justify-center md:flex-row gap-y-2">
				<div className="flex basis-1/3 items-center justify-center ">
					<Image
						src="/main/cabinet/logo-kabinet.svg"
						alt="logo cabinet"
						quality={100}
						width="500"
						height="500"
						className="w-44"
					/>
				</div>
				<div className="basis-2/3">
					<h1 className="hidden text-center text-4xl font-bold md:block lg:px-0 lg:pb-2 lg:text-start xl:text-5xl">
						Arundaya Cakrabuana
					</h1>
					<h2 className="text-xl text-center md:text-start md:text-2xl font-semibold lg:block xl:text-2xl">
						Himakom Periode 2023/2024
					</h2>
					<section className="mt-3">
						<h3 className="font-semibold">Arundaya (Matahari Terbit)</h3>
						<p>
							Memiliki makna untuk terus bangkit, percaya diri, dan motivasi
							untuk terus bergerak maju dengan penuh semangat juang dalam
							menggapai masa depan yang luar biasa.
						</p>
					</section>
					<section className="mt-3">
						<h3 className="font-semibold">Cakrabuana (Roda dunia) </h3>
						<p>
							<span>Dilambangkan dengan roda bergerigi</span>{' '}
							<ol className="list-decimal pl-6">
								<li>
									Roda: Memiliki makna pergerakan yang dinamis dengan harapan
									akan timbul sikap yang adaptif ketika melalui setiap
									permasalahan yang dihadapi.
								</li>
								<li>
									Enam Gerigi: HIMAKOM terdiri dari 6 divisi yang memiliki
									kegigihan dalam bekerja keras dalam mencapai tujuan bersama.
								</li>
							</ol>
						</p>
					</section>
				</div>
			</div>
			<div className="mt-6">
				<div className="flex items-center gap-x-2 text-sm font-semibold ">
					<div className="h-6 w-6 bg-[#F3BE00]"></div>
					<p>Ceria dan optimistis</p>
				</div>
				<div className="mt-2 flex items-center gap-x-2 text-sm font-semibold">
					<div className="h-6 w-6 bg-[#868686]"></div>
					<p>Bertanggung Jawab dan Serius</p>
				</div>
			</div>
		</section>
	);
}

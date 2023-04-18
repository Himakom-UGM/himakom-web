import Calendar from './Calendar';
import Image from 'next/image';

export default function Events() {
	return (
		<div className="relative w-full flex-wrap pt-20">
			<Image
				src={'/main/images/bg/patternpad.svg'}
				alt="hero"
				fill
				className="-z-[9999] bg-fixed object-cover object-center"
				style={{
					objectPosition: 'center',
				}}
			/>
			<div className="mx-auto flex w-[93%] flex-col gap-y-8 gap-x-10 rounded-xl bg-white p-5 md:flex-row md:p-8">
				<div className="md:basis-2/5">
					<h1 className="flex flex-col text-4xl">
						Our Planned
						<span className="text-6xl font-semibold">Activities</span>
					</h1>
					<p className="mt-6 text-justify">
						Memuat kalender kegiatan HIMAKOM yang terdiri dari serangkaian
						kegiatan, acara, dan program yang diselenggarakan oleh HIMAKOM.
						Kalender kegiatan ini memberikan informasi penting tentang jadwal
						kegiatan HIMAKOM dalam periode tertentu.
					</p>
				</div>
				<div className="md:basis-3/5">
					<Calendar />
				</div>
			</div>
		</div>
	);
}

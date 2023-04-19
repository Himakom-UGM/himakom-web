import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getEvents, getYear } from './lib';
import TimelineCard from './TimelineCard';

export default function Timeline() {
	const [years, setYears] = useState<any>();
	const [events, setEvents] = useState<any>([]);

	useEffect(() => {
		const sendRequest = async () => {
			const res = await getEvents();
			setEvents(res);
		};

		sendRequest();
	}, []);

	useEffect(() => {
		const sendRequest = async () => {
			const res = await getYear();
			setYears(res);
		};

		sendRequest();
	}, [events]);

	return (
		<div className="flex w-full flex-col justify-center py-16 px-8 lg:px-12 xl:px-20">
			{years && (
				<div className="">
					<div className={ years > 3 ? 'flex justify-start gap-x-6 rounded-t-lg bg-[#212152] py-3 px-2 text-xl font-semibold text-white md:px-8' : 'flex justify-center gap-x-6 rounded-t-lg bg-[#212152] py-2 px-2 text-xl font-semibold text-white md:px-8' }>
						{years.map((year: string) => (
							<div
								key={year}
								className="w-24 text-2xl lg:text-3xl xl:w-32 cursor-pointer rounded-lg bg-[#3F3F9C] py-2 xl:py-3 text-center"
							>
								{year}
							</div>
						))}
					</div>
					<div className="grid overflow-x-hidden max-h-screen grid-cols-1 gap-8 overflow-scroll rounded-b-xl bg-blur p-8 sm:grid-cols-2 customMd:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
						{events &&
							events.map((event: any) => (
								<TimelineCard
									key={event.id}
									division={event.division}
									title={event.title}
									date={event.date}
									description={event.details.slice(0, 270)}
									image={event.images ? 'https:' + event.images[0].fields.file.url : '/main/images/bg/not_found.png'}
								/>
							))}
					</div>
				</div>
			)}
		</div>
	);
}

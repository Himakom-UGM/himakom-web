import { useEffect, useRef, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Script from 'next/script';

export default function MyCalendar() {
	const calendarRef = useRef<HTMLDivElement>(null);
	const [calendar, setCalendar] = useState<any>(null);
	const [delay, setDelay] = useState<boolean>(true);

	useEffect(() => {
		if (calendarRef.current && !calendar) {
			const newCalendar = new Calendar(calendarRef.current, {
				plugins: [googleCalendarPlugin, dayGridPlugin],
				googleCalendarApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
				events: {
					googleCalendarId: process.env.NEXT_PUBLIC_CALENDAR_ID,
				},
			});

			setTimeout(() => {
				setCalendar(newCalendar);
			}, 999);

			setTimeout(() => {
				newCalendar.render();
			}, 1000);
		}
	}, [calendar, calendarRef]);

	useEffect(() => {
		const delayer = setTimeout(() => {
			setDelay(false);
		}, 1000);

		return () => {
			clearTimeout(delayer);
		};
	}, []);

	return (
		<div className='relative h-full'>
			{!calendar && <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center h-full animate-pulse text-xl text-[#3F3F9C] font-semibold'>Loading...</div>}
			<div ref={calendarRef}>
				<Script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.5/index.global.min.js" />
			</div>
		</div>
	);
}

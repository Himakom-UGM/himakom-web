import { useEffect, useRef, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Script from 'next/script';

export default function MyCalendar() {
	const calendarRef = useRef<HTMLDivElement>(null);
	const [calendar, setCalendar] = useState<any>(null);

	useEffect(() => {
		if (calendarRef.current && !calendar) {
			const newCalendar = new Calendar(calendarRef.current, {
				plugins: [googleCalendarPlugin, dayGridPlugin],
				googleCalendarApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
				events: {
					googleCalendarId: process.env.NEXT_PUBLIC_CALENDAR_ID,
				},
			});

			newCalendar.render();
			setCalendar(newCalendar);
		}
	}, [calendar, calendarRef]);

	return (
		<div ref={calendarRef}>
			<Script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.5/index.global.min.js" />
		</div>
	);
}

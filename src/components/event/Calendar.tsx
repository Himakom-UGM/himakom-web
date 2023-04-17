import { useEffect, useRef, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default function MyCalendar() {
	const calendarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (calendarRef.current) {
			const calendar = new Calendar(calendarRef.current, {
				plugins: [googleCalendarPlugin, dayGridPlugin],
				googleCalendarApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
				events: {
					googleCalendarId: process.env.NEXT_PUBLIC_CALENDAR_ID,
				},
			});

			calendar.render();
		}
	}, []);

	return <div ref={calendarRef}></div>;
}

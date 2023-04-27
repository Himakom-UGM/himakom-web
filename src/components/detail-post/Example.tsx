import blogpoststyle from '../../styles/Blogpost.module.scss';
import SearchButton from './Searchbutton';
import { useState } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default function Example(props: any) {
	const date = props.date;
	const [accordionState, setAccordionState] = useState<any>({});
	const formattedDate = new Date(date)
		.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: '2-digit',
		})
		.replace(/\//g, '/');

	const options = {
		renderText: (text: any) =>
			text.split('\n').flatMap((text: any, i: any) => [i > 0 && <br />, text]),
	};

	const allevents = props.allevents;
	const filteredEvents = allevents.filter(
		(event: any) =>
			event.fields.title.toLowerCase() !== props.title.toLowerCase()
	);

	const renderAccordion = () => {
		const eventsByMonth = filteredEvents.reduce((acc:any, event:any) => {
			const month = new Date(event.sys.createdAt).toLocaleString('default', {
				month: 'long',
			});
			if (!acc[month]) {
				acc[month] = [];
			}
			acc[month].push(event);
			return acc;
		}, {});

		const handleAccordionToggle = (month:any) => {
			setAccordionState((prevState:any) => ({
				...prevState,
				[month]: !prevState[month],
			}));
		};

		return (
			<>
				{Object.entries(eventsByMonth).map(([month, events]: any) => (
					<div key={month}>
						<h2 onClick={() => handleAccordionToggle(month)}>{month}</h2>
						{accordionState[month] &&
							events.map((event: any) => (
								<a
									href={`/main/events/${event.fields.title
										.toLowerCase()
										.replace(/ /g, '-')}`}
									key={event.sys.id}
								>
									<div>
										<p>{event.fields.title}</p>
									</div>
								</a>
							))}
					</div>
				))}
			</>
		);
	};

	console.log('https:' + props.img);

	return (
		<>
			<div className={blogpoststyle.bannerwrapper}>
				<div className={blogpoststyle.bannerwrapper_background + 'relative '}>
					<Image
						fill
						src={'https:' + props.img}
						alt="hellow"
						className="object-cover"
					/>
				</div>
				<div className={blogpoststyle.bannerwrapper_button}>
					<a href="">{props.divisi}</a>
				</div>
				<div className={blogpoststyle.bannerwrapper_title}>
					<h1>{props.title}</h1>
				</div>

				<div className={blogpoststyle.bannerwrapper_postdate}>
					<h2>{`Posted on ${formattedDate} by ${props.published} `}</h2>
				</div>
			</div>

			<div className={blogpoststyle.contentwrapper}>
				<div className={blogpoststyle.contentwrapper_leftcol}>
					<div className={blogpoststyle.contentwrapper_leftcol_content}>
						{documentToReactComponents(props.body, options)}
					</div>

					<div className={blogpoststyle.contentwrapper_leftcol_notes}>
						<p>Put any text or notes below here</p>
					</div>
				</div>

				<div className={blogpoststyle.contentwrapper_rightcol}>
					<SearchButton />
					<div className={blogpoststyle.contentwrapper_rightcol_tablecontents}>
						<h2>Table of Contents</h2>
						<div
							className={
								blogpoststyle.contentwrapper_rightcol_tablecontents_content
							}
						>
							{documentToReactComponents(props.body, options)}
						</div>
					</div>
					<div className={blogpoststyle.contentwrapper_rightcol_archive}>
						<h2>Archive in 2023</h2>
						<div
							className={blogpoststyle.contentwrapper_rightcol_archive_content}
						>
							{renderAccordion()}
						</div>
					</div>

					<div className={blogpoststyle.contentwrapper_rightcol_comment}>
						<h2>Leave a comment</h2>
						<form
							action=""
							className={blogpoststyle.contentwrapper_rightcol_comment_form}
						>
							<input type="text" placeholder="Name" />
							<textarea
								name=""
								placeholder="Comment"
								id=""
								cols={30}
								rows={10}
							></textarea>
							<button type="submit">Send</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

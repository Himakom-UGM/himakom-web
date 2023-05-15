import blogpoststyle from '../../styles/Blogpost.module.scss';
import SearchButton from './Searchbutton';
import React, {
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
	ReactPortal,
	useEffect,
	useState,
} from 'react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Head from 'next/head';

export default function Example(props: any) {
	const date = props.date;
	const formattedDate = new Date(date)
		.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: '2-digit',
		})
		.replace(/\//g, '/');

	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
				<p className="mb-4">{children}</p>
			),
			[BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
				<h1 className="mb-4 text-3xl font-bold">{children}</h1>
			),
			[BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
				<h2 className="mb-4 text-2xl font-bold">{children}</h2>
			),
			[BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
				<h3 className="mb-4 text-xl font-bold">{children}</h3>
			),
			[BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
				<ul className="list-inside list-disc ">{children}</ul>
			),
			[BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
				<ol className="list-inside list-decimal ">{children}</ol>
			),
			[BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
				<li className="">{children}</li>
			),
			[BLOCKS.HR]: (node: any) => <hr className="my-4 border-gray-300" />,
			[BLOCKS.EMBEDDED_ASSET]: (node: any, children: React.ReactNode) => {
				// Access the fields of the embedded asset using `node.data.target.fields`
				const { title, file } = node.data.target.fields;
				const { url, contentType } = file;

				// Render the embedded image
				return (
					<Image
						src={url}
						alt={title ? title['en-US'] : ''}
						title={title ? title['en-US'] : ''}
						// Add any additional attributes or styles as needed
					/>
				);
			},
		},
		renderText: (text: string) => (
			<>
				{text.split('\n').map((text, i) => (
					<React.Fragment key={i}>
						{i > 0 && <br />}
						{text}
					</React.Fragment>
				))}
			</>
		),
	};

	const allevents = props.allevents;
	const filteredEvents = allevents.filter(
		(event: any) =>
			event.fields.title.toLowerCase() !== props.title.toLowerCase()
	);

	interface Event {
		sys: {
			createdAt: string;
			id: string;
		};
		fields: {
			title: string;
		};
	}

	interface Props {
		filteredEvents: Event[];
	}

	const RenderAccordion: React.FunctionComponent<Props> = ({
		filteredEvents,
	}) => {
		const [accordionState, setAccordionState] = useState<{
			[key: string]: boolean;
		}>({});
		const eventsByMonth: { [key: string]: Event[] } = filteredEvents.reduce(
			(acc: { [key: string]: Event[] }, event: Event) => {
				const month = new Date(event.sys.createdAt).toLocaleString('default', {
					month: 'long',
				});
				if (!acc[month]) {
					acc[month] = [];
				}
				acc[month].push(event);
				return acc;
			},
			{}
		);

		const handleAccordionToggle = (month: string) => {
			setAccordionState((prevState) => ({
				...prevState,
				[month]: !prevState[month],
			}));
		};

		return (
			<>
				{Object.entries(eventsByMonth).map(([month, events]) => (
					<div key={month}>
						<h2 onClick={() => handleAccordionToggle(month)}>{month}</h2>
						{accordionState[month] &&
							events.map((event) => (
								<a
									href={`/main/event/${event.fields.title
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

	return (
		<>
			<Head>
				<title>Event: {props.title}</title>
			</Head>
			<div className={blogpoststyle.bannerwrapper}>
				<div
					className={
						blogpoststyle.bannerwrapper_background + 'relative xl:mt-20'
					}
				>
					<Image
						fill
						src={'https:' + props.img + '?q=30&fm=webp'}
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
							<RenderAccordion filteredEvents={filteredEvents} />
						</div>
					</div>

					<div className={blogpoststyle.contentwrapper_rightcol_comment}>
						<h2>Leave a comment</h2>
						<form
							action=""
							className={blogpoststyle.contentwrapper_rightcol_comment_form}
						>
							<input type="text" placeholder="Name" className="outline-none" />
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

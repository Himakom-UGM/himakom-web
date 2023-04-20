import blogpoststyle from '../../styles/Blogpost.module.scss';
import SearchButton from './Searchbutton';
import react, { useState, useEffect } from 'react';

import { BLOCKS, INLINES, MARKS, documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';


export default function Example(props: any) {
	const date = props.date
	const formattedDate = new Date(date).toLocaleDateString('en-GB', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit'
	  }).replace(/\//g, '/');

	  const options = {
		renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
	  };
	  
	  const allevents = props.allevents;
	  const filteredEvents = allevents.filter((event) => event.fields.title.toLowerCase() !== props.title.toLowerCase())

	  const renderAccordion = () => {
		const eventsByMonth = filteredEvents.reduce((acc, event) => {
		  const month = new Date(event.sys.createdAt).toLocaleString('default', { month: 'long' });
		  if (!acc[month]) {
			acc[month] = [];
		  }
		  acc[month].push(event);
		  return acc;
		}, {});
		const [accordionState, setAccordionState] = useState({});
	  
		const handleAccordionToggle = (month) => {
		  setAccordionState(prevState => ({
			...prevState,
			[month]: !prevState[month]
		  }));
		}
	  
		return (
		  <>
			{Object.entries(eventsByMonth).map(([month, events]) => (
			  <div key={month}>
				<h2 onClick={() => handleAccordionToggle(month)}>
				  {month}
				</h2>
				{accordionState[month] && (
				  events.map((event) => (
					<a href={`/main/events/${event.fields.title.toLowerCase().replace(/ /g, '-')}`} key={event.sys.id}>
					  <div><p>{event.fields.title}</p></div>
					</a>
				  ))
				)}
			  </div>
			))}
		  </>
		);
	  };
	  
	  
	  
	  
	return (
		<>
			<div className={blogpoststyle.bannerwrapper}>
				<div className={blogpoststyle.bannerwrapper_background}>
				<Image src={props.img} alt="" />
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
					<div className={blogpoststyle.contentwrapper_leftcol_content}>{documentToReactComponents(props.body, options)}</div>

					<div className={blogpoststyle.contentwrapper_leftcol_notes}>
						<p>Put any text or notes below here</p>
					</div>
				</div>

				<div className={blogpoststyle.contentwrapper_rightcol}>
					<SearchButton />
					<div
						className={blogpoststyle.contentwrapper_rightcol_tablecontents}>
							<h2>Table of Contents</h2>
							<div className={blogpoststyle.contentwrapper_rightcol_tablecontents_content}>
								{documentToReactComponents(props.body, options)}
							</div>
						</div>
					<div
						className={blogpoststyle.contentwrapper_rightcol_archive}>
							<h2>Archive in 2023</h2>
							<div className={blogpoststyle.contentwrapper_rightcol_archive_content}>
								{renderAccordion()}
							</div>
						</div>

						<div className={blogpoststyle.contentwrapper_rightcol_comment}>
							<h2>Leave a comment</h2>
							<form action="" className={blogpoststyle.contentwrapper_rightcol_comment_form}>
								<input type="text" placeholder='Name' />
								<textarea name="" placeholder='Comment' id="" cols="30" rows="10"></textarea>
								<button type='submit'>Send</button>
							</form>
						</div>
				</div>
			</div>
		</>
	);
}

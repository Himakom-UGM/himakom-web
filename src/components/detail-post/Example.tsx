import blogpoststyle from '../../styles/Blogpost.module.scss';
import SearchButton from './Searchbutton';

import { BLOCKS, INLINES, MARKS, documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function Example(props) {
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


	  
	  
	return (
		<>
			<div className={blogpoststyle.bannerwrapper}>
				<div className={blogpoststyle.bannerwrapper_background}>
				<img src={props.img} alt="" />
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
								{filteredEvents.map((allevent) => (
									// <div>{allevent.fields.title}</div>
									<a href={`/main/events/${allevent.fields.title.toLowerCase().replace(/ /g, '-')}`}>{allevent.fields.title}</a>
								))}
							</div>
						</div>
				</div>
			</div>
		</>
	);
}

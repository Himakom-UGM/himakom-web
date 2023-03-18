import { AspirationType } from '@/utils/contentful/contentfulTypes';
import { Entry } from 'contentful';
import { useState } from 'react';

export default function AspirationCardMobile({
	entry,
}: {
	entry: Entry<AspirationType>;
}) {
	const [enabled, setEnabled] = useState(false);
	return (
		<div 
            onClick={() => setEnabled(!enabled)}
			className="flex flex-col justify-between gap-4 px-4 pt-6 cursor-pointer  "
			key={entry.sys.id}
		>
			<p className=" overflow-hidden text-ellipsis  text-xl font-extrabold   ">
				{entry.fields.subject}
			</p>
			<div className=" ">
				<p>From: {entry.fields.from}</p>
				<p>To: {entry.fields.to}</p>
			</div>
			{enabled && (
				<p className=" overflow-hidden text-ellipsis   ">
					{entry.fields.message}
				</p>
			)}

		</div>
	);
}

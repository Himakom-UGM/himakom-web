import { AspirationType } from '@/utils/contentful/contentfulTypes';
import { Entry } from 'contentful';
import { useState } from 'react';
import AspirationCard from './AspirationCard';
import AspirationCardMobile from './AspirationCardMobile';

export default function AspirationsMobile({
	filteredEntries,
}: {
	filteredEntries: AspirationType[];
}) {
	return (
		<div className=" mx-4 mb-2 mt-8 z-10 flex w-full max-w-[640px] flex-col rounded-lg  border bg-white pb-8 text-primary-100  ">
			{filteredEntries.map((entry, index) => (
				<>
					<AspirationCardMobile entry={entry} key={index} />
					{filteredEntries.length - 1 !== index && (
						<hr className=" mt-8 mx-4 h-[2px] border-0 bg-primary-100" />
					)}
				</>
			))}
		</div>
	);
}

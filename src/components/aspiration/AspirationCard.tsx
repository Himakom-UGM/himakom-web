export default function AspirationCard({subject, from, to} : {subject: string, from: string, to: string}) {
	return (
			<div className="flex h-40 flex-col justify-between rounded-lg border border-[#000000] bg-contrast-100 px-4 py-6 shadow-xl">
				<p className=" h-14 overflow-hidden text-ellipsis  text-xl   font-extrabold">
					{subject}
				</p>
				<div className=" font-bold">
					<p>From: {from}</p>
					<p>To: {to}</p>
				</div>
			</div>
	);
}

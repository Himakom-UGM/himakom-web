export default function AspirationCard({
	subject,
	from,
	to,
	message,
}: {
	subject: string;
	from: string;
	to: string;
	message: string;
}) {
	return (
		<div className="group flex max-h-40 flex-col  overflow-hidden rounded-lg bg-contrast-100 px-4 py-6 shadow-xl transition-all duration-500 hover:max-h-96">
			<p className=" relative z-10 text-xl font-extrabold   text-ellipsis">{subject}</p>
			<div className=" font-bold">
				<p>From: {from}</p>
				<p>To: {to}</p>
			</div>
			<div className=" invisible relative z-0 mt-8 text-ellipsis opacity-0 transition-opacity  duration-500 group-hover:visible group-hover:opacity-100 overflow-auto ">
				{message}
			</div>
		</div>
	);
}

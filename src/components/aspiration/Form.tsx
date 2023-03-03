import { useEffect, useRef, useState } from 'react';

export default function Form() {
	const [fromName, setFromName] = useState<string>('');
	const [anonymous, setAnonymous] = useState<boolean>(false);
	const fromNameRef = useRef<HTMLInputElement>(null);
	const toNameRef = useRef<HTMLInputElement>(null);
	const msgRef = useRef<HTMLTextAreaElement>(null);

	function anonymousHandler() {
		setAnonymous((prev) => {
			// if anonymous is checked, then focus on msg input else focus on fromName input
			if (prev) {
				fromNameRef.current?.focus();
				setFromName('');
			}
			if (!prev) {
				msgRef.current?.focus();
				setFromName('anonymous');
			}
			return !prev;
		});
	}

	
	function fromNameHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setFromName(e.target.value);
		setAnonymous(false);
	}

	useEffect(() => {
		toNameRef.current?.focus();
	}, []);

	return (
		<div className='py-1 px-3'>
			<div className="flex flex-col">
				<label htmlFor="to">To:</label>
				<input
					type="text"
					name="to"
					id="to"
					placeholder="Enter Name..."
					ref={toNameRef}
					className="mt-1 rounded-lg bg-formColor-100 px-[14px] py-[6px] text-base outline-none"
				/>
			</div>
			<div className="flex flex-col">
				<div className="flex">
					<label htmlFor="from">From:</label>
					<div className="flex gap-x-1">
						<input
							type="checkbox"
							onChange={anonymousHandler}
							name="anonymous"
							checked={anonymous}
							id="anonymous"
							className="ml-2 outline-none"
						/>
						<label htmlFor="anonymous">Anonymous</label>
					</div>
				</div>
				<input
					type="text"
					name="from"
					id="from"
					value={fromName}
					onChange={fromNameHandler}
					ref={fromNameRef}
					placeholder="Enter Name..."
					className="mt-1 rounded-lg bg-formColor-100 px-[14px] py-[6px] text-base outline-none"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="message">Message:</label>
				<div className="mt-1 rounded-lg bg-formColor-100 px-[14px] py-[6px]">
					<textarea
						name="message"
						id="message"
						ref={msgRef}
						placeholder="Enter Message..."
						className="min-h-[200px] w-full bg-formColor-100 outline-none"
					/>
				</div>
			</div>
		</div>
	);
}

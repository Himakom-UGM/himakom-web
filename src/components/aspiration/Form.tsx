import { useEffect, useRef, useState } from 'react';

export default function Form({
	register,
	errors,
}: {
	register: any;
	errors: any;
}) {
	return (
		<div className="flex flex-col gap-y-2">
			<div className="flex flex-col">
				<label htmlFor="to">To:</label>
				<input
					type="text"
					name="to"
					id="to"
					placeholder="Enter Name..."
					{...register('to', { required: 'This is required' })}
					className="mt-1 rounded-lg bg-formColor-100 px-[14px] py-[6px] text-base outline-none"
				/>
				{errors.to && (
					<p className="mt-2 text-xs italic text-red-500">
						{errors.to.message}
					</p>
				)}
			</div>
			<div className="flex flex-col">
				<label htmlFor="to">From:</label>
				<input
					type="text"
					name="from"
					{...register('from')}
					id="from"
					placeholder="Enter Name..."
					className="mt-1 rounded-lg bg-formColor-100 px-[14px] py-[6px] text-base outline-none"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="to">Subject:</label>
				<input
					type="text"
					name="subject"
					{...register('subject', { required: 'This is required' })}
					id="subject"
					placeholder="Enter Name..."
					className="mt-1 rounded-lg bg-formColor-100 px-[14px] py-[6px] text-base outline-none"
				/>
				{errors.subject && (
					<p className="mt-2 text-xs italic text-red-500">
						{errors.subject.message}
					</p>
				)}
			</div>
			<div className="flex flex-col">
				<label htmlFor="message">Message:</label>
				<div className="mt-1 rounded-lg bg-formColor-100 px-[14px] py-[6px]">
					<textarea
						name="message"
						id="message"
						{...register('message', { required: 'This is required' })}
						placeholder="Enter Message..."
						className="min-h-[216px] w-full bg-formColor-100 outline-none"
					/>
				</div>
				{errors.message && (
					<p className="mt-2 text-xs italic text-red-500">
						{errors.message.message}
					</p>
				)}
			</div>
		</div>
	);
}

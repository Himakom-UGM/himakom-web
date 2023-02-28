import Upload from '@/svg/upload';
import { useEffect, useRef, useState } from 'react';

export default function Form() {
	const [fromName, setFromName] = useState<string>('');
	const [files, setFiles] = useState<File[]>([]);
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
				setFromName('anonymous')
			}
			return !prev;
		});
	}
	function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}
	function fileUploadHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const files = Array.from(e.target.files as FileList);
		// check size of files
		const totalSize = files.reduce((acc, file) => acc + file.size, 0);
		// max size is 10MB
		if (totalSize > 10 * 1024 * 1024) {
			alert('Total size of files should not exceed 10MB');
			return;
		}
		setFiles(files);
	}
	function fromNameHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setFromName(e.target.value);
		setAnonymous(false);
	}

	useEffect(() => {
		toNameRef.current?.focus();
	}, []);

	return (
		<div className="w-full rounded-xl py-1 px-2">
			<form className="flex flex-col gap-y-1" onSubmit={submitHandler}>
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
								className="ml-2"
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
				<div className="mt-1 flex items-center justify-between">
					<div className="flex items-center gap-x-3">
						<label className="flex w-fit items-center gap-x-2 rounded-xl border-2 border-primary-300 px-3 py-2 font-medium">
							<span>
								<Upload />
							</span>
							<span>Upload File</span>
							<input
								multiple
								type="file"
								name="file"
								id="file"
								className="hidden"
								onChange={fileUploadHandler}
							/>
						</label>
						<div className="underline underline-offset-4">
							Attachments{files.length > 0 && ` (${files.length})`}
						</div>
					</div>
					<button
						type="submit"
						className="h-[36px] min-w-[100px] rounded-xl bg-primary-300 text-white"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

import { useState } from 'react';
import Image from 'next/image';
import Form from './Form';
import Upload from '@/svg/upload';
import Drag from './Drag';

export default function Layout() {
	const [numberUpload, setNumberUpload] = useState(0);
	const [uploadActive, setUploadActive] = useState(false);

	async function uploadToApi(formData: FormData) {
		const data = await fetch('/api/uploadaspiration', {
			method: 'POST',
			body: formData,
		});
	}

	function submitHandler(e: any) {
		e.preventDefault();
		const formData = new FormData();
		console.log(e);
		formData.append('to', e.target[0].value);
		formData.append('from', e.target[2].value);
		formData.append('message', e.target[3].value);

		uploadToApi(formData).then((data) => {
			console.log(data);
		});
	}

	console.log(uploadActive);

	const fileClickHandler = () => {
		setUploadActive(true);
	};

	function handleClose() {
		setUploadActive(false);
	}

	function handleUploadNumber(num: number) {
		setNumberUpload(num);
	}

	return (
		<form
			className="mx-auto flex max-w-[640px] mt-6 h-[512px] flex-col justify-between gap-y-1 rounded-xl bg-contrast-100 p-6 first-letter:max-w-[640px] customMd:mt-0 customMd:max-w-full "
			onSubmit={submitHandler}
		>
			{!uploadActive && <Form />}
			{uploadActive && <Drag onClose={handleClose} />}
			<div className="flex items-center justify-between mt-2">
				<div onClick={fileClickHandler} className="flex items-center gap-x-3">
					<button
						disabled={uploadActive}
						style={{
							borderColor: !uploadActive ? '#3F3F9C' : 'rgba(63, 63, 156, 0.5)',
						}}
						className="flex h-[36px] w-fit items-center gap-x-2 rounded-xl border-2 px-3 font-medium"
					>
						<span>
							<Upload onUpload={uploadActive} />
						</span>
						<span
							className={!uploadActive ? 'text-primary-100' : 'text-onDrop'}
						>
							Files
						</span>
					</button>
					<div className="hidden underline underline-offset-4 customMd:block">
						Attachments{numberUpload > 0 && ` (${numberUpload})`}
					</div>
				</div>
				<button
					type="submit"
					className="h-[36px] min-w-[100px] rounded-xl bg-primary-300 text-contrast-100"
				>
					Submit
				</button>
			</div>
		</form>
	);
}

import { useState } from 'react';
import Image from 'next/image';
import Form from './Form';
import Upload from '@/svg/upload';
import Drag from './Drag';

export default function Layout() {
	const [numberUpload, setNumberUpload] = useState(0);
	const [uploadActive, setUploadActive] = useState(false);

	function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
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
			className="flex h-[460px] flex-col justify-between gap-y-1 rounded-xl bg-white p-3"
			onSubmit={submitHandler}
		>
			{!uploadActive && <Form />}
			{uploadActive && <Drag onClose={handleClose} />}
			<div className="mt-1 flex items-center justify-between">
				<div onClick={fileClickHandler} className="flex items-center gap-x-3">
					<button
						disabled={uploadActive}
						style={{
							borderColor: !uploadActive ? '#3F3F9C' : 'rgba(63, 63, 156, 0.5)',
						}}
						className="flex w-fit items-center gap-x-2 rounded-xl border-2 px-3 py-2 font-medium"
					>
						<span>
							<Upload onUpload={uploadActive} />
						</span>
						<span
							className={!uploadActive ? 'text-primary-100' : 'text-onDrop'}
						>
							Upload Files
						</span>
					</button>
					<div className="underline underline-offset-4">
						Attachments{numberUpload > 0 && ` (${numberUpload})`}
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
	);
}

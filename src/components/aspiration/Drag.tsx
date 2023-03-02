import UploadLarge from '@/svg/upload-large';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import FileLogo from '@/svg/file';
import TrashLogo from '@/svg/trash';
import CloseLogo from '@/svg/close';

export default function Drag(props: { onClose: () => void }) {
	const inputFileRef = useRef<HTMLInputElement>(null);
	const [files, setFiles] = useState<File[]>([]);
	const [dragActive, setDragActive] = useState<boolean>(false);

	function handleBrowse() {
		inputFileRef.current?.click();
	}

	function handleDrag(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault();
		e.stopPropagation();

		if (e.type === 'dragover' || e.type === 'dragenter') {
			setDragActive(true);
		} else {
			setDragActive(false);
		}
	}

	console.log('dragActive', dragActive);

	function handleDrop(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			// max 10 files
			if (files.length + e.dataTransfer.files.length >= 10) {
				alert('Max 10 files allowed');
				return;
			}

			handleFiles(e.dataTransfer.files);
			// e.dataTransfer.clearData();
		}
	}

	function handleFiles(fileList: FileList) {
        if (files.length >= 10) {
            alert('Max 10 files allowed');
            return;
        }
		for (let i = 0; i < fileList.length; i++) {
			setFiles((prev) => [...prev, fileList[i]]);
		}
	}

	function handleClose() {
		setFiles([]);
		props.onClose();
	}

	function handleTrash(index: number) {
		console.log(index);
		setFiles((prev) => prev.filter((_, i) => i !== index));
	}

	console.log('length', files.length);
	return (
		<div
			className={`relative grid h-full grid-cols-2 rounded-xl border-2 border-black ${
				files.length > 0 ? 'px-3' : 'px-7'
			} py-3 `}
		>
			<div
				onClick={handleClose}
				className="absolute z-10 right-[6px] top-[6px] cursor-pointer"
			>
				<CloseLogo />
			</div>
			{!dragActive && (
				<div
					onDragEnter={handleDrag}
					className={`
				${
					files.length > 0 ? '' : 'col-span-2'
				} my-2 flex flex-col items-center justify-center gap-y-3 rounded-xl border-[3px] border-dashed border-primary-100`}
				>
					<UploadLarge changeColor={false} />
					<input
						type="file"
						multiple
						id="file-upload"
						ref={inputFileRef}
						className="hidden"
						onChange={(e) => {
							if (e.target.files && e.target.files.length > 0 && files.length + e.target.files.length < 10) {
								handleFiles(e.target.files);
							} else {
                                alert('Max 10 files allowed');
                            }
						}}
					/>
					<h3 className="text-lg font-medium">Drag and drop files here </h3>
					<p className="text-lg font-medium">Or</p>
					<button
						onClick={handleBrowse}
						className="rounded-lg bg-primary-100 py-1 px-4 text-white"
					>
						Browse
					</button>
				</div>
			)}

			{dragActive && (
				<div
					onDrop={handleDrop}
					onDragLeave={handleDrag}
					onDragEnter={handleDrag}
					onDragOver={handleDrag}
					className={`${
						dragActive ? 'col-span-2' : ''
					} my-2 flex flex-col items-center justify-center gap-y-3 rounded-xl border-[3px] border-dashed border-onDrop`}
				>
					<div className="animate-pulse">
						<UploadLarge changeColor={dragActive} />
					</div>
					<input
						type="file"
						multiple
						id="file-upload"
						ref={inputFileRef}
						className="hidden"
					/>
					<h3 className="text-lg font-medium">Drag and drop files here </h3>
					<p className="text-lg font-medium">Or</p>
					<button
						onClick={handleBrowse}
						className="rounded-lg bg-onDrop py-1 px-4 text-white"
					>
						Browse
					</button>
				</div>
			)}
			{files.length > 0 && (
				<div className="px-4 max-h-full relative">
					<h3 className="text-lg font-medium">Uploaded Files</h3>
					<ul className="mt-3 h-[80%] absolute pr-2 w-[95%] overflow-y-scroll">
						{files.map((file, index) => (
							// max name file length 20
							<li
								key={index}
								className="my-2 flex items-center justify-between text-sm font-medium"
							>
								<div className='flex gap-x-2'>
									<FileLogo />

									{file.name.length > 11
										? file.name.slice(0, 16) + '...'
										: file.name}
								</div>
								<span
									className="ml-2 cursor-pointer"
									onClick={() => handleTrash(index)}
								>
									<TrashLogo />
								</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

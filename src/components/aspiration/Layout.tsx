import { useState } from 'react';
import Image from 'next/image';
import Form from './Form';
import Upload from '@/svg/upload';
import Drag from './Drag';
import { useForm } from 'react-hook-form';
import SuccessModal from './SuccessModal';
import { useRouter } from 'next/router';
import ErrorModal from './ErrorModal';
import { db, writeAspiration } from '@/utils/firebase';

export default function Layout() {
	// const [numberUpload, setNumberUpload] = useState(0);
	// const [uploadActive, setUploadActive] = useState(false)
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [showErrorModal, setShowErrorModal] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();


	function submitHandler(e: any) {
		writeAspiration(db, {
			...e,
		}).then(() => {
			setShowSuccessModal(true);
			setTimeout(() => {
				router.reload()
			}, 2000);
			reset();
		}
		).catch(() => {
			setShowErrorModal(true);
			setTimeout(() => {
				router.reload()
			}, 2000);

		}
		);
	}

	// console.log(uploadActive);

	// const fileClickHandler = () => {
	// 	setUploadActive(true);
	// };

	// function handleClose() {
	// 	setUploadActive(false);
	// }

	// function handleUploadNumber(num: number) {
	// 	setNumberUpload(num);
	// }

	return (
		<>
			<SuccessModal
				enabled={showSuccessModal}
				setEnabled={setShowSuccessModal}
			/>
			<ErrorModal enabled={showErrorModal} setEnabled={setShowErrorModal} />
			<form
				className="mx-auto mt-6 flex max-w-[640px] flex-col justify-between gap-y-1 rounded-xl bg-contrast-100 p-6 first-letter:max-w-[640px] customMd:mt-0 customMd:max-w-full "
				onSubmit={handleSubmit(submitHandler)}
			>
				<Form register={register} errors={errors} />
				{/* {uploadActive && <Drag onClose={handleClose} />} */}
				<div className="mt-2 flex items-center justify-between">
					{/* <div onClick={fileClickHandler} className="flex items-center gap-x-3">
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
    </div> */}
					<button
						type="submit"
						className="mt-2 h-[36px] min-w-[100px] rounded-xl bg-primary-300 text-contrast-100"
					>
						Submit
					</button>
				</div>
			</form>
		</>
	);
}

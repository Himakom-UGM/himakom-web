export default function ErrorModal({
	enabled,
	setEnabled,
}: {
	enabled: boolean;
	setEnabled: (value: boolean) => void;
}) {
	return (
		<div
			id="popup-modal"
			tabIndex={-1}
			className={` ${
				enabled ? 'block' : 'hidden'
			} fixed top-0 left-0 right-0 z-50 h-[calc(100%-1rem)]  overflow-y-auto overflow-x-hidden bg-black/80 p-4 transition-all md:inset-0 md:h-full`}
		>
			<div className="relative top-1/2 mx-auto h-full w-full max-w-md -translate-y-1/2 md:h-auto ">
				<div className="relative rounded-lg bg-white shadow ">
					<button
						onClick={() => {
							setEnabled(false);
						}}
						type="button"
						className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
						data-modal-hide="popup-modal"
					>
						<svg
							aria-hidden="true"
							className="h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="sr-only">Close modal</span>
					</button>
					<div className="p-6 text-center ">
						<svg
							className=" mx-auto mb-4 h-12 w-12 fill-red-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
								fill-rule="nonzero"
							/>
						</svg>
						<h3 className="mb-5 text-lg font-normal text-gray-500 ">
							Something went wrong. Please try again later.
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

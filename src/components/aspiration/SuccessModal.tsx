export default function SuccessModal({ enabled, setEnabled }: { enabled: boolean, setEnabled: any }) {
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
                            className=" mx-auto w-12 h-12 mb-4 fill-green-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" />
						</svg>
						<h3 className="mb-5 text-lg font-normal text-gray-500 ">
							Aspiration successfully submitted
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Form() {
	return (
		<div className="py-1 px-2 rounded-xl w-fit">
			<form>
				<div className="flex flex-col">
					<label htmlFor="to">To:</label>
					<input type="text" name="to" id="to" />
				</div>
				<div>
					<label htmlFor="from">From:</label>
					<input type="text" name="from" id="from" />
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" cols={30} rows={10} />
				</div>
				<div>
					<div>
						<input type="file" name="file" id="file" />
						<div>
							<label htmlFor="file">Choose a file</label>
						</div>
					</div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

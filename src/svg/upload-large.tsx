export default function UploadLarge(props: { changeColor: boolean }) {
	return (
		<svg
			width="41"
			height="40"
			viewBox="0 0 41 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.125 39.5C3.71563 39.5 2.50954 39.0231 1.50675 38.0692C0.50225 37.1137 0 35.9656 0 34.625V27.3125H5.125V34.625H35.875V27.3125H41V34.625C41 35.9656 40.4986 37.1137 39.4958 38.0692C38.4913 39.0231 37.2844 39.5 35.875 39.5H5.125ZM17.9375 29.75V9.88437L11.275 16.2219L7.6875 12.6875L20.5 0.5L33.3125 12.6875L29.725 16.2219L23.0625 9.88437V29.75H17.9375Z"
				fill={props.changeColor ? 'rgba(63, 63, 156, 0.5)' : '#40409D'}
			/>
		</svg>
	);
}

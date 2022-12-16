export default CrossIcon = ({ size = 1, width, height }) => (
	<svg
		width={width ? width : 15 * size}
		height={height ? height : 17 * size}
		viewBox="0 0 15 17"
		fill="none"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			y1="-1.5"
			x2="19.0453"
			y2="-1.5"
			transform="matrix(0.677974 -0.735086 0.677974 0.735086 2.08594 17)"
			strokeWidth="3"
		/>
		<line
			y1="-1.5"
			x2="19.0453"
			y2="-1.5"
			transform="matrix(0.677974 0.735086 -0.677974 0.735086 0 3)"
			strokeWidth="3"
		/>
	</svg>
);

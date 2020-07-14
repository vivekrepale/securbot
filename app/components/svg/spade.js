import * as React from "react";

function Svgspade(props) {
	return (
		<svg width={64} height={64} viewBox="0 0 64 64" {...props}>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "#000"}
				strokeWidth={2}
				strokeMiterlimit={10}
				d="M32 63h9c-7 0-7-19-7-19v-6c0 7.671 6 13 13 13 8.334 0 14-7.329 14-15C61 17.48 32 1 32 1S3 17.48 3 36c0 7.671 6.667 15 15 15 7 0 11.395-5.87 12-13v6s0 19-7 19h9"
			/>
		</svg>
	);
}

export default Svgspade;

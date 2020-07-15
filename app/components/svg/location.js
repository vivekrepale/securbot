import * as React from "react";

function SvgLocation(props) {
	return (
		<svg width={64} height={64} viewBox="0 0 64 64" {...props}>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "#000"}
				strokeWidth={2}
				strokeMiterlimit={10}
				d="M1 59l21-8 20 8 21-8V5l-21 8-20-8-21 8zM22 5v46M42 13v46"
			/>
		</svg>
	);
}

export default SvgLocation;

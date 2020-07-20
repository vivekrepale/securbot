import React from "react";

function SvgComponent(props) {
	return (
		<svg width={64} height={64} viewBox="0 0 64 64" {...props}>
			<path
				fill="white"
				stroke="#000"
				strokeWidth={2}
				strokeLinejoin="bevel"
				strokeMiterlimit={10}
				d="M27 15l17 17-17 17"
			/>
			<circle
				fill="none"
				stroke="none"
				strokeWidth={3}
				strokeMiterlimit={10}
				cx={32}
				cy={32}
				r={30.999}
			/>
		</svg>
	);
}

export default SvgComponent;

import React from "react";

function SvgComponent(props) {
	return (
		<svg width={64} height={64} viewBox="0 0 64 64" {...props}>
			<path
				fill="none"
				stroke="white"
				strokeWidth={4.5}
				strokeMiterlimit={10}
				d="M18.947 17.153l26.098 25.903M19.045 43.153l25.902-26.097"
			/>
			<circle
				fill="none"
				stroke="white"
				strokeWidth={4.5}
				strokeMiterlimit={10}
				cx={32}
				cy={32}
				r={30.999}
			/>
		</svg>
	);
}

export default SvgComponent;

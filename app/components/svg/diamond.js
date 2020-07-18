import React from "react";

function SvgComponent(props) {
	return (
		<svg width={64} height={64} viewBox="0 0 64 64" {...props}>
			<g fill="none" stroke="#000" strokeWidth={2} strokeMiterlimit={10}>
				<path
					fill={props.fill || "none"}
					stroke={props.stroke || "#000"}
					strokeWidth={2}
					strokeMiterlimit={10}
					d="M29 6h17l17 21-31 31L1 27 18 6h14v52"
				/>
				<path
					fill={props.fill || "none"}
					stroke={props.stroke || "#000"}
					strokeWidth={2}
					strokeMiterlimit={10}
					d="M32 57L18 27l6-21M32 57l14-30-6-21M1 27h62"
				/>
			</g>
		</svg>
	);
}

export default SvgComponent;

import * as React from "react";

function SvgComponent(props) {
	return (
		<svg height={512} viewBox="0 0 512 512" width={512} {...props}>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "#000"}
				strokeWidth={2}
				strokeMiterlimit={10}
				d="M386 112H46C20.636 112 0 91.364 0 66V46C0 20.636 20.636 0 46 0h340c25.364 0 46 20.636 46 46v20c0 25.364-20.636 46-46 46z"
			/>
			<circle
				fill={props.fill || "none"}
				stroke={props.stroke || "#000"}
				strokeWidth={2}
				strokeMiterlimit={10}
				cx={216}
				cy={272}
				r={48}
			/>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "#000"}
				strokeWidth={2}
				strokeMiterlimit={10}
				d="M387 144H45a5 5 0 00-5 5v57.296c0 97.286 78.216 177.432 175.501 177.703C312.776 384.27 392 305.213 392 208v-59a5 5 0 00-5-5zM216 352c-44.112 0-80-35.888-80-80s35.888-80 80-80 80 35.888 80 80-35.888 80-80 80zM400 512c-8.837 0-16-7.164-16-16s7.163-16 16-16c44.112 0 80-35.888 80-80 0-8.836 7.163-16 16-16s16 7.164 16 16c0 61.757-50.243 112-112 112z"
			/>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "#000"}
				strokeWidth={2}
				strokeMiterlimit={10}
				d="M400 456c-8.837 0-16-7.164-16-16s7.163-16 16-16c13.233 0 24-10.767 24-24 0-8.836 7.163-16 16-16s16 7.164 16 16c0 30.878-25.121 56-56 56zM384.02 400c-8.836 0-16.005-7.164-16.005-16s7.159-16 15.995-16h.01c8.837 0 16 7.164 16 16s-7.164 16-16 16z"
			/>
		</svg>
	);
}

export default SvgComponent;

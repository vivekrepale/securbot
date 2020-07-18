import * as React from "react";

function SvgComponent(props) {
	return (
		<svg height={512} viewBox="0 0 510 510" width={512} {...props}>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "#000"}
				strokeWidth={2}
				strokeMiterlimit={10}
				d="M240 0h30v90h-30zM413.962 189.228l88.29-17.64 5.88 29.43-88.29 17.64zM364.348 99.426l63.63-63.63 21.21 21.21-63.63 63.63zM2.118 200.852l5.88-29.43 88.29 17.64-5.88 29.43zM60.741 56.972l21.21-21.21 63.63 63.63-21.21 21.21zM60 462.522V510h390v-47.478C450 441.833 433.167 425 412.478 425H97.522C76.832 425 60 441.833 60 462.522zM366.548 174.444c-3.354-15.372-11.95-29.272-24.203-39.142C330.091 125.435 314.677 120 298.943 120h-91.926c-32.869 0-61.405 23.394-67.851 55.625L95.292 395H240v-36.635c-31.412-6.887-55-34.916-55-68.365 0-38.599 31.402-70 70-70 38.599 0 70 31.401 70 70 0 33.449-23.588 61.478-55 68.365V395s143.172.073 144.708.177z"
			/>
			<circle
				fill={props.fill || "none"}
				stroke={props.stroke || "#000"}
				strokeWidth={2}
				strokeMiterlimit={10}
				cx={255}
				cy={290}
				r={40}
			/>
		</svg>
	);
}

export default SvgComponent;

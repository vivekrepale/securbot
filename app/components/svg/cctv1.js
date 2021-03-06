import * as React from "react";

function SvgCctv1(props) {
	return (
		<svg height={512} viewBox="0 0 503.195 503.195" width={512} {...props}>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "#000"}
				strokeWidth={2}
				strokeMiterlimit={10}
				d="M176.982 264.598l158.213-158.213-77.393-77.394c-5.85-5.851-15.331-5.859-21.191-.022L0 264.598z"
			/>
			<path
				fill={props.fill || "none"}
				stroke={props.stroke || "#000"}
				strokeWidth={2}
				strokeMiterlimit={10}
				d="M488.195 256.598h-35c-24.813 0-45 20.187-45 45v51h-36.469c-9.139-27.057-40.064-39.715-65.41-27.091l-25.909-25.909 52.184-52.184c17.544-17.544 17.544-46.089 0-63.633l-16.184-16.184-122.605 122.607a15 15 0 01-10.606 4.394H97.209l84.963 84.962a14.964 14.964 0 0019.63-1.356l57.394-57.394 25.909 25.909c-15.475 31.069 7.238 67.878 42.091 67.878 20.671 0 38.255-13.42 44.531-32h36.469v51c0 24.813 20.187 45 45 45h35c8.284 0 15-6.716 15-15v-192c-.001-8.283-6.717-14.999-15.001-14.999zM68.882 308.697l-16.294 16.294c-5.858 5.857-5.858 15.355 0 21.213l56 56c5.858 5.858 15.355 5.858 21.213 0l16.294-16.294z"
			/>
		</svg>
	);
}

export default SvgCctv1;

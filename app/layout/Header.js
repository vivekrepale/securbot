import React from "react";
import { useSpring, animated, config } from "react-spring";
import LogoIamge from "../assets/images/logo.png";

import NavbarDesktop from "./NavbarDesktop.js";
import HeaderLogo from "./HeaderLogo";

import SvgCall from "../components/svg/call.js";
import SvgEmail from "../components/svg/email.js";
import SvgCctv1 from "../components/svg/cctv1.js";
import SvgCctv2 from "../components/svg/cctv2.js";

const Header = () => {
	const fade = useSpring({
		from: { opacity: 0, marginTop: -50 },
		to: { opacity: 1, marginTop: 0 },
	});

	const cctv = useSpring({
		from: { transform: "scale(0.5) translateY(-20px) " },
		to: async (next) => {
			while (1) {
				await next({ transform: "scale(0.8) translateY(30px) " });
			}
		},
		reset: true,
		//reverse: true,
		config: { duration: 3000 },
	});

	const call_me = useSpring({
		from: { transform: "scale(0) translateX(-25px)", opacity: 0 },
		to: async (next) => {
			while (1) {
				await next({
					transform: "scale(1) translateX(5px)",
					opacity: 1,
				});
			}
		},
		reset: true,
		config: { duration: 1000 },
	});
	return (
		<header className="header">
			<div className="header-logo">
				<HeaderLogo />
			</div>
			<NavbarDesktop />

			<div className="header__title">
				<div className="header__title__main">
					{" "}
					<h1 className="header__title__main-1">Siddharth</h1>
					<h1 className="header__title__main-2">Enterprises</h1>
				</div>
				<h2 className="header__title__sub">
					for all your security needs...
				</h2>
			</div>

			<animated.div style={fade} className="header__decoration">
				<animated.div style={cctv}>
					{" "}
					<SvgCctv2
						fill="white"
						stroke="none"
						className="header__decoration__svg"
					/>
				</animated.div>

				<h3>
					Be it your <span>house</span>, your <span>shop</span> or
					your <span>workspace</span>, we can handle all your{" "}
					<span>security </span>
					and <span>survailance</span> related issues!
				</h3>
			</animated.div>

			<div className="header__contact-links">
				<div className="header__contact-links__call-mail">
					<animated.div style={call_me}>
						<SvgCall
							className="header__contact-links__call-mail__icon"
							fill="white"
							stroke="white"
						/>
					</animated.div>

					<a
						href="tel:+918080605001"
						className="header__contact-links__call-mail__link "
					>
						+918080605001
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;

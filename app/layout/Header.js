import React from "react";
import LogoIamge from "../assets/images/logo.png";
//import { Link } from "react-router-dom";
//import Sprite from "../assets/svg/sprite.svg";
import SvgCall from "../components/svg/call.js";
import SvgEmail from "../components/svg/email.js";

const Header = () => {
	return (
		<header className="header">
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
			<div className="header__contact-links">
				<div className="header__contact-links__call-mail">
					<SvgCall
						className="header__contact-links__call-mail__icon"
						fill="white"
						stroke="white"
					/>

					<a
						href="tel:+918080605001"
						className="header__contact-links__call-mail__link "
					>
						+918080605001
					</a>
				</div>
				<div className="header__contact-links__call-mail">
					<SvgEmail
						className="header__contact-links__call-mail__icon"
						fill="white"
						stroke="white"
					/>

					<a
						href="mailto:enquiry@securbot.in"
						className="header__contact-links__call-mail__link "
					>
						enquiry@securbot.in
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;

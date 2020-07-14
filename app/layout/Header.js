import React from "react";
import LogoIamge from "../assets/images/logo.png";
//import { Link } from "react-router-dom";
import Sprite from "../assets/svg/sprite.svg";

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
				<span>
					Call:{" "}
					<a
						href="tel:+918080605001"
						className="header__contact-links__link"
					>
						+918080605001
					</a>
				</span>
				<span>
					Enquiry:{" "}
					<a
						href="mailto:vivekrepale@gmail.com"
						className="header__contact-links__link"
					>
						enquiry@securbot.in
					</a>
				</span>
			</div>
		</header>
	);
};

export default Header;

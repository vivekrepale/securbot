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
		</header>
	);
};

export default Header;

import React from "react";
import LogoIamge from "../assets/images/logo2.png";

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<img
					src={LogoIamge}
					alt="securbotLogo"
					className="header__logo__img"
				/>
				<div className="header__logo__text">
					{" "}
					<h1 className="header__logo__text-1">Secur</h1>
					<h1 className=" header__logo__text-2">Bot</h1>
				</div>
			</div>
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

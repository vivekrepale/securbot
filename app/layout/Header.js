import React from "react";

const Header = () => {
	return (
		<header className="header">
			<img
				src="../assets/images/logo.png"
				alt="logo"
				className="header__logo"
			/>
			<div className="header__title">
				<h1>
					<span className="header__title__main">
						<span className="header__title__sub__capital">S</span>
						ecur
						<span className="header__title__sub__capital">B</span>ot
					</span>
					<span className="header__title__sub">
						<span className="header__title__sub__capital">S</span>
						iddharth{" "}
						<span className="header__title__sub__capital">E</span>
						nterprises
					</span>
				</h1>
				<h2 className="header__sub-title">
					for all your security needs...
				</h2>
			</div>
		</header>
	);
};

export default Header;

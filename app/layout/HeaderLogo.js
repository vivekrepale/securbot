import React from "react";
import LogoIamge from "../assets/images/logo2.png";

const HeaderLogo = () => {
	return (
		<div className="header-logo">
			<img
				src={LogoIamge}
				alt="securbotLogo"
				className="header-logo__img"
			/>
			<div className="header-logo__text">
				{" "}
				<h1 className="header-logo__text__text-1">Secur</h1>
				<h1 className=" header-logo__text__text-2">Bot</h1>
			</div>
		</div>
	);
};

export default HeaderLogo;

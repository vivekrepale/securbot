import React, { useState } from "react";

import NavList from "../components/NavList.js";

const NavButton = () => {
	const [displayNavigation, setDisplayNavigation] = useState(false);

	const toggleDisplayNavigation = (e) => {
		e.preventDefault;
		if (displayNavigation) {
			setDisplayNavigation(false);
		} else {
			setDisplayNavigation(true);
		}
	};

	return (
		<div className="navigation">
			<div className="navigation__background">
				<button
					onClick={toggleDisplayNavigation}
					className="navigation__background__button "
				>
					Click!
				</button>
			</div>
			{displayNavigation ? <NavigationList /> : ""}
		</div>
	);
};

export default NavButton;

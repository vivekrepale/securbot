import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import NavListModal from "../components/modals/NavListModal";

const NavBar = () => {
	const [displayNavList, setDisplayNavList] = useState(false);

	const toggleDisplayNavList = () => {
		if (displayNavList) {
			setDisplayNavList(false);
		} else {
			setDisplayNavList(true);
		}
	};

	return (
		<div className="navigation">
			<label onClick={toggleDisplayNavList} className="navigation__btn">
				<span></span>
			</label>

			{displayNavList ? (
				<NavListModal toggleDisplayNavList={toggleDisplayNavList} />
			) : (
				""
			)}

			{/**<CSSTransition
				timeout={100}
				in={displayNavList}
				classNames="navigation__nav__background"
				unmountOnExit
			>
				<NavList />
			</CSSTransition>**/}
		</div>
	);
};

export default NavBar;

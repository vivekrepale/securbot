import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import NavList from "../components/NavList";

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
			<input
				className="navigation__checkbox"
				type="checkbox"
				id="nav-toggle"
			/>

			<label
				onClick={toggleDisplayNavList}
				className="navigation__btn"
				htmlFor="nav-toggle"
			>
				<span></span>
			</label>

			{displayNavList ? (
				<NavList toggleDisplayNavList={toggleDisplayNavList} />
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
